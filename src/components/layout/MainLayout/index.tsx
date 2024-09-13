import { Footer } from '@components/layout/Footer';
import { Header } from '@components/layout/Header';
import { HeroSection } from '@components/layout/HeroSection';
import { LastUpdate } from '@components/layout/LastUpdate';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
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
}
