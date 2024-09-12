import LogoSvg from '@assets/images/logo.svg';

import styles from './Logo.module.scss';

type LogoProps = {
  withText?: boolean;
  width?: number;
  height?: number;
};

export function Logo({ withText = false, width = 40, height = 40 }: LogoProps) {
  return (
    <div className={styles.logo}>
      <LogoSvg width={width} height={height} className={styles.svg} />
      {withText && <span className={styles.text}>Modsen Currency Tracker</span>}
    </div>
  );
}
