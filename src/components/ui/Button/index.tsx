import cn from 'classnames';

import styles from './index.module.scss';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      <button className={cn(styles.button, className)} type="button" {...props}>
        {children}
      </button>
    </div>
  );
};
