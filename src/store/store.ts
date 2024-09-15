import { configureStore } from '@reduxjs/toolkit';

import currenciesReducer from './slices/currenciesSlice';

export const store = configureStore({
  reducer: {
    currencies: currenciesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
