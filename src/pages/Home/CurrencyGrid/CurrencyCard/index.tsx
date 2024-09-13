import DefaultIcon from '@assets/images/icons/ifix.svg';

import styles from './CurrencyCard.module.scss';

type CurrencyCardProps = {
  name: string;
  value: string;
  icon?: React.ReactNode;
};

export function CurrencyCard({ name, value, icon }: CurrencyCardProps) {
  return (
    <div className={styles.currency_card}>
      <div className={styles.currency_card_icon}>{icon || <DefaultIcon />}</div>
      <div className={styles.currency_card_content}>
        <p className={styles.currency_name}>{name}</p>
        <p className={styles.currency_value}>{value}</p>
      </div>
    </div>
  );
}
