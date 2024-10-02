import { CurrencyCard } from '@components/layout/CurrencyCard';
import { EnrichedCurrency } from '@customTypes/currency';

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
      {currencyList.map(({ code, name, price }) => (
        <CurrencyCard key={code} code={code} name={name} price={price} />
      ))}
    </div>
  );
};
