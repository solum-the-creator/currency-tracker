import { BlinkDot } from '@components/ui/BlinkDot';
import { formatTime } from '@utils/dateUtils';
import { useSelector } from 'react-redux';

import { selectLastUpdated } from '@/store/slices/currenciesSlice';

import styles from './index.module.scss';

export const LastUpdate = () => {
  const lastUpdated = useSelector(selectLastUpdated);

  return (
    <section className={styles.lastUpdateSection}>
      <div className={styles.lastUpdate}>
        <BlinkDot />
        <p className={styles.lastUpdateText}>Last updated at {formatTime(lastUpdated)}</p>
      </div>
    </section>
  );
};
