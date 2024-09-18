type ApiEndpoint = 'latestRates' | 'historicalRates' | 'currencies';

export const apiEndpoints: Record<ApiEndpoint, string> = {
  latestRates: 'latest',
  historicalRates: 'history',
  currencies: 'currencies',
};
