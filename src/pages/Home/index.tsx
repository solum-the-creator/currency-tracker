import { CurrencyGrid } from '@components/layout/CurrencyGrid';
import { useSelector } from 'react-redux';

import { selectCurrencies } from '@/store/currencies-info/selectors';

import styles from './index.module.scss';

export const Home = () => {
  const { data = [], loading, error } = useSelector(selectCurrencies);

  if (loading) {
    return <p>Загрузка...</p>;
  }
  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <section className={styles.currencySection}>
      <div className={styles.content}>
        <CurrencyGrid title="Quotes" currencyList={data} />
      </div>
    </section>
  );
};
