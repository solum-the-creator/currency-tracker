import styles from './index.module.scss';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" {...props}>
        {children}
      </button>
    </div>
  );
};
