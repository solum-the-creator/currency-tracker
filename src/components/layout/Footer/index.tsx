import { Logo } from '@components/ui/Logo';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.topBlock}>
          <div className={styles.descriptionWrapper}>
            <Logo withText={true} />
            <p className={styles.description}>
              Since then, the company has grown organically to. Starsup is the world&apos;s largest
              trading platform, with $12 billion worth of currency trading and 500,000 tickets sold
              daily to tens of thousands of traders worldwide.
            </p>
          </div>
          <div className={styles.linkRows}>
            <div className={styles.linkRow}>
              <h4 className={styles.linkTitle}>General</h4>
              <div className={styles.links}>
                <Link className={styles.link} to="market.com">
                  Market
                </Link>
                <Link className={styles.link} to="market.com">
                  Service
                </Link>
              </div>
            </div>

            <div className={styles.linkRow}>
              <h4 className={styles.linkTitle}>Product</h4>
              <div className={styles.links}>
                <Link className={styles.link} to="market.com">
                  Sparks
                </Link>
                <Link className={styles.link} to="market.com">
                  Snaps
                </Link>
              </div>
            </div>

            <div className={styles.linkRow}>
              <h4 className={styles.linkTitle}>Community</h4>
              <div className={styles.links}>
                <Link className={styles.link} to="market.com">
                  Ideas
                </Link>
                <Link className={styles.link} to="market.com">
                  Streams
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>Startsup © 2023-2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
