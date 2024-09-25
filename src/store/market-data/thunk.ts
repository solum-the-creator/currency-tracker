import { FetchMarketDataParams, MarketData, MarketDataResponse } from '@customTypes/market';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMarketApiUrl } from '@utils/urlUtils';
import axios from 'axios';

export const fetchMarketData = createAsyncThunk<MarketData[], FetchMarketDataParams>(
  'marketData/fetchMarketData',
  async ({ currencyCode, startDate, endDate }) => {
    const response = await axios.get<MarketDataResponse[]>(getMarketApiUrl(currencyCode), {
      params: {
        apikey: process.env.COIN_API_KEY,
        period_id: '1DAY',
        time_start: startDate,
        time_end: endDate,
      },
    });

    const marketData: MarketData[] = response.data.map((item) => ({
      timeOpen: item.time_open,
      timeClose: item.time_close,
      rateOpen: item.rate_open,
      rateHigh: item.rate_high,
      rateLow: item.rate_low,
      rateClose: item.rate_close,
    }));

    return marketData;
  },
);
