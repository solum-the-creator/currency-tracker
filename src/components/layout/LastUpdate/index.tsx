import { BlinkDot } from '@components/ui/BlinkDot';
import { formatTime } from '@utils/dateUtils';
import { useSelector } from 'react-redux';

import { selectLastUpdated } from '@/store/slices/currenciesSlice';

import styles from './LastUpdate.module.scss';

export function LastUpdate() {
  const lastUpdated = useSelector(selectLastUpdated);

  return (
    <section className={styles.last_update_section}>
      <div className={styles.last_update}>
        <BlinkDot />
        <p className={styles.last_update_text}>
          Last updated at {formatTime(lastUpdated)}
        </p>
      </div>
    </section>
  );
}
