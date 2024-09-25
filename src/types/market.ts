import { CurrenciesCode } from './currency';

export type MarketData = {
  timeOpen: string;
  timeClose: string;
  rateOpen: number;
  rateHigh: number;
  rateLow: number;
  rateClose: number;
};

export type MarketDataWithoutTime = Omit<MarketData, 'timeOpen' | 'timeClose'>;

export type MarketState = {
  data: MarketData[];
  loading: boolean;
  error: string | null;
};

export type MarketDataResponse = {
  time_period_start: string;
  time_period_end: string;
  time_open: string;
  time_close: string;
  rate_open: number;
  rate_high: number;
  rate_low: number;
  rate_close: number;
};

export type FetchMarketDataParams = {
  startDate: string;
  endDate: string;
  currencyCode: CurrenciesCode;
};
