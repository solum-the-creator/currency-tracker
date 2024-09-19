export type CurrenciesCode = 'USD' | 'BRL' | 'EUR' | 'CAD' | 'BTC' | 'JPY' | 'ETH' | 'BNB';

export type CurrencyInfo = {
  code: CurrenciesCode;
  name: string;
  symbol: string;
};

export type ExchangeRates = {
  code: CurrenciesCode;
  price: number;
};

export type EnrichedCurrency = CurrencyInfo & ExchangeRates;

export type ExchangeRatesState = {
  data: EnrichedCurrency[];
  loading: boolean;
  error: string | null;
  lastUpdated: number | null;
};

export type ExchangeRatesResponse = {
  data: Record<CurrenciesCode, { code: string; value: number }>;
};

export type CurrenciesResponse = {
  data: Record<CurrenciesCode, CurrencyInfo>;
};
