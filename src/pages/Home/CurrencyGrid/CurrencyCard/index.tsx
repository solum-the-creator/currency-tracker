import DefaultIcon from '@assets/images/icons/ifix.svg';
import { currencyIcons } from '@constants/currencyIcons';
import { CurrenciesCode } from '@customTypes/currecny';
import { calculateDisplayPrice } from '@utils/convertUtils';
import { useSelector } from 'react-redux';

import { selectCurrencyByCode } from '@/store/slices/currenciesSlice';

import styles from './CurrencyCard.module.scss';

type CurrencyCardProps = {
  code: CurrenciesCode;
  name: string;
  price: number;
};

export function CurrencyCard({ code, name, price }: CurrencyCardProps) {
  const targetCurrencyCode: CurrenciesCode = 'USD';
  const { price: targetCurrencyPrice, symbol } = useSelector(
    selectCurrencyByCode(targetCurrencyCode),
  );

  const displayPrice = calculateDisplayPrice(price, targetCurrencyPrice);

  const Icon = currencyIcons[code];
  const icon = Icon ? <Icon /> : <DefaultIcon />;

  return (
    <div className={styles.currency_card}>
      <div className={styles.currency_card_icon}>{icon}</div>
      <div className={styles.currency_card_content}>
        <p className={styles.currency_name}>{name}</p>
        <p className={styles.currency_value}>
          {symbol} {displayPrice}
        </p>
      </div>
    </div>
  );
}
