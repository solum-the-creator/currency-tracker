import DefaultIcon from '@assets/images/icons/ifix.svg';
import { currencyIcons } from '@constants/currencyIcons';
import { CurrenciesCode } from '@customTypes/currecny';

import styles from './CurrencyCard.module.scss';

type CurrencyCardProps = {
  code: CurrenciesCode;
  name: string;
  price: number;
};

export function CurrencyCard({ code, name, price }: CurrencyCardProps) {
  const Icon = currencyIcons[code];
  const icon = Icon ? <Icon /> : <DefaultIcon />;

  return (
    <div className={styles.currency_card}>
      <div className={styles.currency_card_icon}>{icon}</div>
      <div className={styles.currency_card_content}>
        <p className={styles.currency_name}>{name}</p>
        <p className={styles.currency_value}>{price}</p>
      </div>
    </div>
  );
}
