import styles from './Button.module.scss';

export function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" {...props}>
        {children}
      </button>
    </div>
  );
}
