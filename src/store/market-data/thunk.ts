import { FetchMarketDataParams, MarketData, MarketDataResponse } from '@customTypes/market';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMarketData = createAsyncThunk<MarketData[], FetchMarketDataParams>(
  'marketData/fetchMarketData',
  async ({ currencyCode, startDate, endDate }) => {
    const response = await axios.get<MarketDataResponse[]>(
      `${process.env.COIN_API_BASE_URL}/exchangerate/${currencyCode}/USD/history`,
      {
        params: {
          apikey: process.env.COIN_API_KEY,
          period_id: '1DAY',
          time_start: startDate,
          time_end: endDate,
        },
      },
    );

    const marketData: MarketData[] = response.data.map((item) => ({
      time_open: item.time_open,
      time_close: item.time_close,
      rate_open: item.rate_open,
      rate_high: item.rate_high,
      rate_low: item.rate_low,
      rate_close: item.rate_close,
    }));

    return marketData;
  },
);
