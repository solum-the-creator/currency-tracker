import {
  currencyListCurrencies,
  currencyListStocks,
} from '@constants/currency';

import { CurrencyGrid } from './CurrencyGrid';
import styles from './Home.module.scss';

export function Home() {
  return (
    <section className={styles.currency_section}>
      <div className={styles.content}>
        <CurrencyGrid title="Stocks" currencyList={currencyListStocks} />
        <CurrencyGrid title="Quotes" currencyList={currencyListCurrencies} />
      </div>
    </section>
  );
}
