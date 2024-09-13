import { BlinkDot } from '@components/ui/BlinkDot';

import styles from './LastUpdate.module.scss';

type LastUpdateProps = {
  time?: string;
};

export function LastUpdate({ time = '11:59pm' }: LastUpdateProps) {
  return (
    <section className={styles.last_update_section}>
      <div className={styles.last_update}>
        <BlinkDot />
        <p className={styles.last_update_text}>Last updated at {time}</p>
      </div>
    </section>
  );
}
