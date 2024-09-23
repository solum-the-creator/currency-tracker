import { CurrenciesCode } from './currency';

export type Bank = {
  id: string;
  name: string;
  currencies: CurrenciesCode[];
  coordinates: [number, number];
};
