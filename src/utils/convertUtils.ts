export const calculateDisplayPrice = (price: number, targetCurrencyPrice: number): number => {
  const displayPrice = targetCurrencyPrice ? targetCurrencyPrice / price : price;
  return parseFloat(displayPrice.toFixed(2));
};
