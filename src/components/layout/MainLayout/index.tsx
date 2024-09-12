import { Footer } from '@components/layout/Footer';
import { Header } from '@components/layout/Header';

import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
