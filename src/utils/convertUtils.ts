export const calculateDisplayPrice = (price: number, targetCurrencyPrice: number): number => {
  const displayPrice = targetCurrencyPrice / price;
  return Number(displayPrice.toPrecision(3));
};
