import { Footer } from '@components/layout/Footer';
import { Header } from '@components/layout/Header';
import { HeroSection } from '@components/layout/HeroSection';
import { LastUpdate } from '@components/layout/LastUpdate';

import styles from './index.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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
