import { Bank } from '@customTypes/bank';
import { CurrenciesCode } from '@customTypes/currency';
import { MarketData } from '@customTypes/market';

export const filterCurrencyDataByDate = (
  startDate: string,
  endDate: string,
  data: MarketData[],
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return data.filter((entry) => {
    const timeOpen = new Date(entry.timeOpen);
    const timeClose = new Date(entry.timeClose);

    return (timeOpen >= start && timeOpen <= end) || (timeClose >= start && timeClose <= end);
  });
};

export const filterBanksByCurrency = (code: CurrenciesCode, data: Bank[]) =>
  data.filter((bank) => bank.currencies.includes(code));

export const filterCurrenciesForSearch = (text: string, data: CurrenciesCode[]) =>
  data.filter((currency) => currency.toLowerCase().includes(text.toLowerCase()));
