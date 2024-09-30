import { CurrencyGrid } from '@components/layout/CurrencyGrid';
import { CommonError } from '@components/ui/errors/CommonError';
import { Loader } from '@components/ui/Loader';
import { useSelector } from 'react-redux';

import { selectCurrencies } from '@/store/currencies-info/selectors';

import styles from './index.module.scss';

export const Home = () => {
  const { data = [], loading, error } = useSelector(selectCurrencies);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <CommonError message={`Error: ${error}`} />;
  }

  return (
    <section className={styles.currencySection}>
      <div className={styles.content}>
        <CurrencyGrid title="Quotes" currencyList={data} />
      </div>
    </section>
  );
};
