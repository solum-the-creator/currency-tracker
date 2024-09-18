import { combineReducers } from '@reduxjs/toolkit';

import currenciesReducer from './currencies-info/slice';

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});
