import { CurrenciesCode } from '@customTypes/currency';

export const getApiUrl = (endpoint: string) => `${process.env.API_BASE_URL}/${endpoint}`;

export const getMarketApiUrl = (currencyCode: CurrenciesCode) =>
  `${process.env.COIN_API_BASE_URL}/exchangerate/${currencyCode}/USD/history`;
