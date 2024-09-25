import styles from './index.module.scss';

type LoaderProps = {
  size?: number;
};

export const Loader = ({ size = 80 }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div
        data-testid="loader"
        className={styles.loadingContainer}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <div className={styles.loadingProgress} />
      </div>
    </div>
  );
};
