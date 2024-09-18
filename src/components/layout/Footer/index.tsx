import { Logo } from '@components/ui/Logo';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content_wrapper}>
        <div className={styles.top_block}>
          <div className={styles.description_wrapper}>
            <Logo withText={true} />
            <p className={styles.description}>
              Since then, the company has grown organically to. Starsup is the world&apos;s largest
              trading platform, with $12 billion worth of currency trading and 500,000 tickets sold
              daily to tens of thousands of traders worldwide.
            </p>
          </div>
          <div className={styles.link_rows}>
            <div className={styles.link_row}>
              <h4 className={styles.link_title}>General</h4>
              <div className={styles.links}>
                <Link className={styles.link} to="market.com">
                  Market
                </Link>
                <Link className={styles.link} to="market.com">
                  Service
                </Link>
              </div>
            </div>

            <div className={styles.link_row}>
              <h4 className={styles.link_title}>Product</h4>
              <div className={styles.links}>
                <Link className={styles.link} to="market.com">
                  Sparks
                </Link>
                <Link className={styles.link} to="market.com">
                  Snaps
                </Link>
              </div>
            </div>

            <div className={styles.link_row}>
              <h4 className={styles.link_title}>Community</h4>
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
          <p className={styles.copyright_text}>Startsup © 2023-2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
