import { CurrenciesCode } from '@customTypes/currency';
import { getApiUrl, getMarketApiUrl } from '@utils/urlUtils';

beforeAll(() => {
  process.env.API_BASE_URL = 'https://api.example.com';
  process.env.COIN_API_BASE_URL = 'https://coinapi.example.com';
});

describe('getApiUrl', () => {
  it('should return the correct API URL based on the endpoint', () => {
    const endpoint = 'test-endpoint';
    const expectedUrl = 'https://api.example.com/test-endpoint';

    expect(getApiUrl(endpoint)).toBe(expectedUrl);
  });
});

describe('getMarketApiUrl', () => {
  it('should return the correct API URL based on the currency code', () => {
    const currencyCode: CurrenciesCode = 'BTC';
    const expectedUrl = 'https://coinapi.example.com/exchangerate/BTC/USD/history';

    expect(getMarketApiUrl(currencyCode)).toBe(expectedUrl);
  });
});
