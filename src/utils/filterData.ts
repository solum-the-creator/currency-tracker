import { MarketData } from '@customTypes/market';

export const filterCurrencyDataByDate = (
  startDate: string,
  endDate: string,
  data: MarketData[],
) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return data.filter((entry) => {
    const timeOpen = new Date(entry.time_open);
    const timeClose = new Date(entry.time_close);

    return (timeOpen >= start && timeOpen <= end) || (timeClose >= start && timeClose <= end);
  });
};
