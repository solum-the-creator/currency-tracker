import { EnrichedCurrency } from '@customTypes/currency';

import { CurrencyCard } from './CurrencyCard';
import styles from './index.module.scss';

type CurrencyGridProps = {
  title: string;
  currencyList: EnrichedCurrency[];
};

export const CurrencyGrid: React.FC<CurrencyGridProps> = ({ title, currencyList }) => {
  return (
    <div className={styles.currencyBlock}>
      <div className={styles.title}>
        <h2 className={styles.titleText}>{title}</h2>
        <div className={styles.line} />
      </div>
      <div className={styles.empty} />
      {currencyList.map((currency) => (
        <CurrencyCard key={currency.code} {...currency} />
      ))}
    </div>
  );
};
