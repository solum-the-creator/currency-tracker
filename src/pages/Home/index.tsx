import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchCurrencies,
  selectCurrencies,
} from '@/store/slices/currenciesSlice';
import { AppDispatch } from '@/store/store';

import { CurrencyGrid } from './CurrencyGrid';
import styles from './Home.module.scss';

export function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { data = [], loading, error } = useSelector(selectCurrencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <section className={styles.currency_section}>
      <div className={styles.content}>
        <CurrencyGrid title="Quotes" currencyList={data} />
      </div>
    </section>
  );
}
