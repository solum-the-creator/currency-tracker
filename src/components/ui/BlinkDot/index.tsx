import styles from './index.module.scss';

export const BlinkDot = () => {
  return (
    <div className={styles.blinking_container}>
      <div className={styles.blinking_dot}>
        <div className={styles.inner_circle} />
      </div>
    </div>
  );
};
