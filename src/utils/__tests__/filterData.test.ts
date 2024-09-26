import { CurrenciesCode } from '@customTypes/currency';
import { MarketData } from '@customTypes/market';
import { filterCurrenciesForSearch, filterCurrencyDataByDate } from '@utils/filterData';

describe('filterCurrencyDataByDate', () => {
  const mockData: MarketData[] = [
    {
      timeOpen: '2024-09-10T08:00:00Z',
      timeClose: '2024-09-10T16:00:00Z',
      rateOpen: 100,
      rateClose: 100,
      rateHigh: 100,
      rateLow: 100,
    },
    {
      timeOpen: '2024-09-15T08:00:00Z',
      timeClose: '2024-09-15T16:00:00Z',
      rateOpen: 120,
      rateClose: 120,
      rateHigh: 120,
      rateLow: 120,
    },
    {
      timeOpen: '2024-09-12T08:00:00Z',
      timeClose: '2024-09-12T16:00:00Z',
      rateOpen: 110,
      rateClose: 110,
      rateHigh: 110,
      rateLow: 110,
    },
  ];

  it('should filter data within the date range', () => {
    const startDate = '2024-09-09';
    const endDate = '2024-09-13';

    const result = filterCurrencyDataByDate(startDate, endDate, mockData);

    expect(result).toHaveLength(2);

    expect(result[0].rateOpen).toBe(100);
    expect(result[1].rateOpen).toBe(110);
  });

  it('should return an empty array if no data is within the date range', () => {
    const startDate = '2024-09-16';
    const endDate = '2024-09-18';

    const result = filterCurrencyDataByDate(startDate, endDate, mockData);
    expect(result).toHaveLength(0);
  });
});

describe('filterCurrenciesForSearch', () => {
  const mockCurrencies: CurrenciesCode[] = ['USD', 'EUR', 'JPY', 'CAD'];

  it('should filter currencies that include the search text', () => {
    const result = filterCurrenciesForSearch('us', mockCurrencies);
    expect(result).toEqual(['USD']);
  });

  it('should be case insensitive', () => {
    const result = filterCurrenciesForSearch('eur', mockCurrencies);
    expect(result).toEqual(['EUR']);
  });

  it('should return an empty array if no currency matches', () => {
    const result = filterCurrenciesForSearch('btc', mockCurrencies);
    expect(result).toHaveLength(0);
  });
});
