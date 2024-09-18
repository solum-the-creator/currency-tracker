import LogoSvg from '@assets/images/logo.svg';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

type LogoProps = {
  withText?: boolean;
  width?: number;
  height?: number;
};

export const Logo: React.FC<LogoProps> = ({ withText = false, width = 40, height = 40 }) => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <LogoSvg width={width} height={height} className={styles.svg} />
        {withText && <span className={styles.text}>Modsen Currency Tracker</span>}
      </div>
    </Link>
  );
};
