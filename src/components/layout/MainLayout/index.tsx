import { Footer } from '@components/layout/Footer';
import { Header } from '@components/layout/Header';
import { HeroSection } from '@components/layout/HeroSection';
import { LastUpdate } from '@components/layout/LastUpdate';
import { useTheme } from '@hooks/useTheme';
import { isUpdateDayPassed } from '@utils/dateUtils';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/store';
import { selectCurrencies } from '@/store/currencies-info/selectors';
import { fetchCurrencies } from '@/store/currencies-info/thunk';

import styles from './index.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { lastUpdated } = useSelector(selectCurrencies);

  useTheme();

  useEffect(() => {
    if (isUpdateDayPassed(lastUpdated)) {
      dispatch(fetchCurrencies());
    }
  }, [dispatch, lastUpdated]);

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <HeroSection />
        <LastUpdate />
        {children}
      </main>
      <Footer />
    </div>
  );
};
