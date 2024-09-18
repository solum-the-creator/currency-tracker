import { CurrencyGrid } from '@components/layout/CurrencyGrid';
import { isUpdateDayPassed } from '@utils/dateUtils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/store';
import { selectCurrencies } from '@/store/currencies-info/selectors';
import { fetchCurrencies } from '@/store/currencies-info/thunk';

import styles from './index.module.scss';

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data = [], loading, error, lastUpdated } = useSelector(selectCurrencies);

  useEffect(() => {
    if (isUpdateDayPassed(lastUpdated)) {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, lastUpdated]);

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
