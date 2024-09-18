import styles from './index.module.scss';

export const BlinkDot = () => {
  return (
    <div className={styles.blinkingContainer}>
      <div className={styles.blinkingDot}>
        <div className={styles.innerCircle} />
      </div>
    </div>
  );
};
