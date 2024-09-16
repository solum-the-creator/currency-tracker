import { CurrenciesCode } from '@customTypes/currecny';

import styles from './CurrencySelect.module.scss';

export type CurrencySelectProps = {
  currencies: CurrenciesCode[];
  selectedCurrency: CurrenciesCode;
  onCurrencyChange?: (code: CurrenciesCode) => void;
  label?: string;
};
export function CurrencySelect({
  selectedCurrency,
  currencies,
  onCurrencyChange = () => {},
  label = '',
}: CurrencySelectProps) {
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(event.target.value as CurrenciesCode);
  };
  return (
    <div className={styles.select_wrapper}>
      <label className={styles.select} htmlFor="currency_select">
        {label && <span className={styles.label}>{label}</span>}
        <select id="currency_select" value={selectedCurrency} onChange={handleCurrencyChange}>
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
}
