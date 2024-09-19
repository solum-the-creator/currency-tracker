import { MarketState } from '@customTypes/market';
import { createSlice } from '@reduxjs/toolkit';

import { fetchMarketData } from './thunk';

const initialState: MarketState = {
  data: [],
  loading: false,
  error: null,
};

const marketDataSlice = createSlice({
  name: 'market',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMarketData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMarketData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMarketData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default marketDataSlice.reducer;
