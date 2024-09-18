import LogoSvg from '@assets/images/logo.svg';

import styles from './index.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Modsen Currency Tracker</h1>
            <div className={styles.descriptionWrapper}>
              <p className={styles.description}>
                Quotes for the dollar and other international currencies.
              </p>
            </div>
          </div>
          <div className={styles.image}>
            <LogoSvg className={styles.svg} />
          </div>
        </div>
      </div>
    </section>
  );
};
