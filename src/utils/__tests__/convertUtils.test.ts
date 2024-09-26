import { calculateDisplayPrice, convertToShortPrice } from '@utils/convertUtils';

describe('calculateDisplayPrice', () => {
  it('should calculate the display price correctly for given inputs', () => {
    const price = 100;
    const targetCurrencyPrice = 200;
    const result = calculateDisplayPrice(price, targetCurrencyPrice);

    expect(result).toBe(2.0);
  });

  it('should return a number with 3 significant figures', () => {
    const price = 1234;
    const targetCurrencyPrice = 56789;
    const result = calculateDisplayPrice(price, targetCurrencyPrice);

    expect(result).toBe(46);
  });

  it('should handle very small prices', () => {
    const price = 0.000567;
    const targetCurrencyPrice = 1;
    const result = calculateDisplayPrice(price, targetCurrencyPrice);

    expect(result).toBe(1763.7);
  });
});

describe('convertToShortPrice', () => {
  it('should return the number as is if it is an integer', () => {
    expect(convertToShortPrice(1234)).toBe(1234);
  });

  it('should return the number as is if it has 3 or fewer decimal places', () => {
    expect(convertToShortPrice(1234.567)).toBe(1234.567);
    expect(convertToShortPrice(0.123)).toBe(0.123);
  });

  it('should round the number to 4 decimal places if it has more than 4 decimal places', () => {
    expect(convertToShortPrice(1234.56789)).toBe(1234.5679);
    expect(convertToShortPrice(0.00056789)).toBe(0.0006);
  });

  it('should return the same number if it has exactly 4 decimal places', () => {
    expect(convertToShortPrice(1234.5678)).toBe(1234.5678);
    expect(convertToShortPrice(0.0005)).toBe(0.0005);
  });

  it('should handle zero correctly', () => {
    expect(convertToShortPrice(0)).toBe(0);
    expect(convertToShortPrice(0.0)).toBe(0);
  });
});
