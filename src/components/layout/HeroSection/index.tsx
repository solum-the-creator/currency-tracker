import LogoSvg from '@assets/images/logo.svg';

import styles from './HeroSection.module.scss';

export function HeroSection() {
  return (
    <section className={styles.hero_section}>
      <div className={styles.container}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <h1 className={styles.title}>Modsen Currency Tracker</h1>
            <div className={styles.description_wrapper}>
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
}
