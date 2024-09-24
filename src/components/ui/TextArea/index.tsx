import cn from 'classnames';

import styles from './index.module.scss';

type TextAreaProps = {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
};

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  value,
  label,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        id={name}
        onChange={(event) => onChange(event.target.value)}
        className={cn(styles.input, className)}
      />
    </div>
  );
};
