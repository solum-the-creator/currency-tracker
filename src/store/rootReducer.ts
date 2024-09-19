import { combineReducers } from '@reduxjs/toolkit';

import currenciesReducer from './currencies-info/slice';
import marketDataReducer from './market-data/slice';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  marketData: marketDataReducer,
});
