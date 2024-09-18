import { ExchangeRatesState } from '@customTypes/currency';
import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencies } from './thunk';

const initialState: ExchangeRatesState = {
  data: [],
  loading: false,
  error: null,
  lastUpdated: null,
};

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

export default currenciesSlice.reducer;
