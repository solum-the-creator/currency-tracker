import DefaultIcon from '@assets/images/icons/ifix.svg';
import { currencyIcons } from '@constants/currencyIcons';
import { CurrenciesCode } from '@customTypes/currecny';
import { calculateDisplayPrice } from '@utils/convertUtils';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrencyByCode } from '@/store/slices/currenciesSlice';

import styles from './CurrencyCard.module.scss';
import { CurrencyModal } from './CurrencyModal';

type CurrencyCardProps = {
  code: CurrenciesCode;
  name: string;
  price: number;
};

export function CurrencyCard({ code, name, price }: CurrencyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [convertCode, setConvertCode] = useState<CurrenciesCode>('USD');

  const { price: targetCurrencyPrice, symbol } = useSelector(selectCurrencyByCode(convertCode));

  const displayPrice = calculateDisplayPrice(price, targetCurrencyPrice);
  const fullPrice = `${symbol} ${displayPrice}`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCurrencyChange = (currencyCode: CurrenciesCode) => {
    setConvertCode(currencyCode);
  };

  const Icon = currencyIcons[code];
  const icon = Icon ? <Icon /> : <DefaultIcon />;

  return (
    <div>
      <div
        className={styles.currency_card}
        onClick={openModal}
        role="button"
        tabIndex={0}
        aria-label={`Convert currency ${name}`}
      >
        <div className={styles.currency_card_icon}>{icon}</div>
        <div className={styles.currency_card_content}>
          <p className={styles.currency_name}>{name}</p>
          <p className={styles.currency_value}>{fullPrice}</p>
        </div>
      </div>
      {isModalOpen && (
        <CurrencyModal
          onClose={closeModal}
          code={code}
          name={name}
          price={fullPrice}
          convertCode={convertCode}
          onCurrencyChange={handleCurrencyChange}
        />
      )}
    </div>
  );
}
