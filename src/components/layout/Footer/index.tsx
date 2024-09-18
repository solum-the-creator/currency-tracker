import { Logo } from '@components/ui/Logo';
import { footerLinks } from '@constants/paths';

import styles from './index.module.scss';
import { LinkRow } from './LinkRow';

export const Footer = () => {
  const [generalLinks, productLinks, communityLinks] = [
    footerLinks.slice(0, 2),
    footerLinks.slice(2, 4),
    footerLinks.slice(4, 6),
  ];

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
            <LinkRow title="General" linkList={generalLinks} />
            <LinkRow title="Product" linkList={productLinks} />
            <LinkRow title="Community" linkList={communityLinks} />
          </div>
        </div>
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>Startsup © 2023-2024, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
