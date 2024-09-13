import { Currency } from '@constants/currency';

import { CurrencyCard } from './CurrencyCard';
import styles from './CurrencyGrid.module.scss';

type CurrencyGridProps = {
  title: string;
  currencyList: Currency[];
};

export function CurrencyGrid({ title, currencyList }: CurrencyGridProps) {
  return (
    <div className={styles.currency_block}>
      <div className={styles.title}>
        <h2 className={styles.title_text}>{title}</h2>
        <div className={styles.line} />
      </div>
      <div className={styles.empty} />
      {currencyList.map((currency) => (
        <CurrencyCard key={currency.id} {...currency} />
      ))}
    </div>
  );
}
