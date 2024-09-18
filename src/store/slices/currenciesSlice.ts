import { apiEndpoints } from '@constants/api';
import { currenciesCodes, currencyDetails } from '@constants/currency';
import {
  CurrenciesCode,
  EnrichedCurrency,
  ExchangeRatesResponse,
  ExchangeRatesState,
} from '@customTypes/currency';
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import { getApiUrl } from '@utils/urlUtils';
import axios from 'axios';

import type { RootState } from '../store';

const API_KEY = process.env.CURRENCY_API_KEY;

const initialState: ExchangeRatesState = {
  data: [],
  loading: false,
  error: null,
  lastUpdated: null,
};

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies', async () => {
  const response = await axios.get<ExchangeRatesResponse>(getApiUrl(apiEndpoints.latestRates), {
    params: {
      apikey: API_KEY,
      currencies: currenciesCodes.join(','),
    },
  });

  const currencies = response.data.data;

  const enrichedCurrencies: EnrichedCurrency[] = Object.keys(currencies).map((code) => {
    const currencyCode = code as CurrenciesCode;
    return {
      ...currencyDetails[currencyCode],
      price: currencies[currencyCode].value,
    };
  });

  return enrichedCurrencies;
});

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrencies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastUpdated = Date.now();
      })
      .addCase(fetchCurrencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectCurrencies = (state: RootState) => state.currencies;
export const selectLastUpdated = (state: RootState) => state.currencies.lastUpdated;
export const selectCurrencyByCode = (code: CurrenciesCode) =>
  createSelector(
    (state: RootState) => state.currencies.data,
    (currencies) => {
      const selectedCurrency = currencies.find((currency) => currency.code === code);
      return selectedCurrency
        ? { price: selectedCurrency.price, symbol: selectedCurrency.symbol }
        : null;
    },
  );

export default currenciesSlice.reducer;
