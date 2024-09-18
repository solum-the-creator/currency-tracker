import { apiEndpoints } from '@constants/api';
import { currenciesCodes, currencyDetails } from '@constants/currency';
import { EnrichedCurrency, ExchangeRatesResponse } from '@customTypes/currency';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getApiUrl } from '@utils/urlUtils';
import axios from 'axios';

const API_KEY = process.env.CURRENCY_API_KEY;

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await axios.get<ExchangeRatesResponse>(getApiUrl(apiEndpoints.latestRates), {
    params: {
      apikey: API_KEY,
      currencies: currenciesCodes.join(','),
    },
  });

  const currencies = response.data.data;

  const enrichedCurrencies: EnrichedCurrency[] = Object.keys(currencies).map((code) => {
    const currencyCode = code as keyof typeof currencyDetails;
    return {
      ...currencyDetails[currencyCode],
      price: currencies[currencyCode].value,
    };
  });

  return enrichedCurrencies;
});
