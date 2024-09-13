import styles from './BlinkDot.module.scss';

export function BlinkDot() {
  return (
    <div className={styles.blinking_container}>
      <div className={styles.blinking_dot}>
        <div className={styles.inner_circle} />
      </div>
    </div>
  );
}
