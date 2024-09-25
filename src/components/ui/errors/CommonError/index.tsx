import styles from './index.module.scss';

type CommonErrorProps = {
  message?: string;
};

export const CommonError: React.FC<CommonErrorProps> = ({ message = 'Something went wrong' }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{message}</p>
    </div>
  );
};
