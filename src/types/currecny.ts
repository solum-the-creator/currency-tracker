export type CurrenciesCode =
  | 'USD'
  | 'BRL'
  | 'EUR'
  | 'CAD'
  | 'CNY'
  | 'JPY'
  | 'BTC'
  | 'ETH';

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
};

export type ExchangeRatesResponse = {
  data: Record<CurrenciesCode, { code: string; value: number }>;
};
