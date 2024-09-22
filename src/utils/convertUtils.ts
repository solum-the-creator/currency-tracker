export const calculateDisplayPrice = (price: number, targetCurrencyPrice: number): number => {
  const displayPrice = targetCurrencyPrice / price;
  return Number(displayPrice.toPrecision(3));
};

export const convertToShortPrice = (price: number): number => {
  return Number(price.toPrecision(4));
};
