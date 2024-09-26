export const calculateDisplayPrice = (price: number, targetCurrencyPrice: number): number => {
  const displayPrice = targetCurrencyPrice / price;

  if (displayPrice >= 1) {
    return Number(displayPrice.toFixed(1));
  }

  return Number(displayPrice.toPrecision(3));
};

export const convertToShortPrice = (price: number): number => {
  const priceString = price.toString();
  const decimalIndex = priceString.indexOf('.');

  if (decimalIndex === -1 || priceString.length - decimalIndex - 1 <= 3) {
    return price;
  }

  return Number(price.toFixed(4));
};
