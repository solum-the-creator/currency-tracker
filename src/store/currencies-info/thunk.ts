import { apiEndpoints } from '@constants/api';
import { currenciesCodes } from '@constants/currency';
import {
  CurrenciesCode,
  CurrenciesResponse,
  CurrencyInfo,
  EnrichedCurrency,
  ExchangeRatesResponse,
} from '@customTypes/currency';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiUrl } from '@utils/urlUtils';
import axios from 'axios';

const apiKey = process.env.CURRENCY_API_KEY;

export const fetchCurrenciesDetails = createAsyncThunk<Record<CurrenciesCode, CurrencyInfo>>(
  'currencies/fetchCurrenciesDetails',
  async () => {
    const response = await axios.get<CurrenciesResponse>(getApiUrl(apiEndpoints.currencies), {
      params: {
        apikey: apiKey,
        currencies: currenciesCodes.join(','),
      },
    });

    return response.data.data;
  },
);

export const fetchLatestRates = createAsyncThunk('currencies/fetchLatestRates', async () => {
  const ratesResponse = await axios.get<ExchangeRatesResponse>(
    getApiUrl(apiEndpoints.latestRates),
    {
      params: {
        apikey: apiKey,
        currencies: currenciesCodes.join(','),
      },
    },
  );

  return ratesResponse.data.data;
});

export const fetchCurrencies = createAsyncThunk<EnrichedCurrency[]>(
  'currencies/fetchCurrencies',
  async () => {
    const [ratesResponse, detailsResponse] = await Promise.all([
      axios.get<ExchangeRatesResponse>(getApiUrl(apiEndpoints.latestRates), {
        params: {
          apikey: apiKey,
          currencies: currenciesCodes.join(','),
        },
      }),

      axios.get<CurrenciesResponse>(getApiUrl(apiEndpoints.currencies), {
        params: {
          apikey: apiKey,
          currencies: currenciesCodes.join(','),
        },
      }),
    ]);

    const rates = ratesResponse.data.data;
    const details = detailsResponse.data.data;

    const enrichedCurrencies: EnrichedCurrency[] = Object.keys(rates).map((code) => {
      const currencyCode = code as CurrenciesCode;
      const detail = details[currencyCode];

      return {
        code: currencyCode,
        name: detail.name,
        symbol: detail.symbol,
        price: rates[currencyCode].value,
      };
    });

    return enrichedCurrencies;
  },
);
