import { CurrenciesCode } from '@customTypes/currency';

import styles from './index.module.scss';

export type CurrencySelectProps = {
  currencies: CurrenciesCode[];
  selectedCurrency: CurrenciesCode;
  onCurrencyChange?: (code: CurrenciesCode) => void;
  label?: string;
};
export const CurrencySelect: React.FC<CurrencySelectProps> = ({
  selectedCurrency,
  currencies,
  onCurrencyChange,
  label = '',
}) => {
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(event.target.value as CurrenciesCode);
  };
  return (
    <div className={styles.select_wrapper}>
      <label className={styles.select} htmlFor="currencySelect">
        {label && <span className={styles.label}>{label}</span>}
        <select
          data-testid="currency-select"
          id="currencySelect"
          value={selectedCurrency}
          onChange={handleCurrencyChange}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <svg>
          <use xlinkHref="#select-arrow-down" />
        </svg>

        <svg className={styles.sprites}>
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1" />
          </symbol>
        </svg>
      </label>
    </div>
  );
};
