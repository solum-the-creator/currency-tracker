import { CurrenciesCode, CurrencyInfo } from '@customTypes/currecny';

export const currencyDetails: Record<CurrenciesCode, CurrencyInfo> = {
  USD: {
    code: 'USD',
    name: 'United States Dollar',
    symbol: '$',
  },
  BRL: {
    code: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$',
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
  },
  CAD: {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'CA$',
  },
  CNY: {
    code: 'CNY',
    name: 'Chinese Yuan',
    symbol: 'CN¥',
  },
  JPY: {
    code: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥',
  },
  BTC: {
    code: 'BTC',
    name: 'Bitcoin',
    symbol: '₿',
  },
  ETH: {
    code: 'ETH',
    name: 'Ethereum',
    symbol: 'Ξ',
  },
};

export const currenciesCodes: CurrenciesCode[] = Object.keys(
  currencyDetails,
) as CurrenciesCode[];
