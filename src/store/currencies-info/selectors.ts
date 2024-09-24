import { CurrenciesCode } from '@customTypes/currency';
import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

export const selectCurrencies = (state: RootState) => state.currencies;

export const selectLastUpdated = (state: RootState) => state.currencies.lastUpdated;

export const selectCurrenciesCodes = (state: RootState) =>
  state.currencies.data.map((currency) => currency.code);

export const selectCurrencyByCode = (code: CurrenciesCode) =>
  createSelector(
    (state: RootState) => state.currencies.data,
    (currencies) => {
      const selectedCurrency = currencies.find((currency) => currency.code === code);
      return selectedCurrency;
    },
  );
