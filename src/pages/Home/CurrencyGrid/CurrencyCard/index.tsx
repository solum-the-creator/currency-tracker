import DefaultIcon from '@assets/images/icons/ifix.svg';
import { currencyIcons } from '@constants/currencyIcons';
import { CurrenciesCode } from '@customTypes/currency';
import { calculateDisplayPrice } from '@utils/convertUtils';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrencyByCode } from '@/store/slices/currenciesSlice';

import { CurrencyModal } from './CurrencyModal';
import styles from './index.module.scss';

type CurrencyCardProps = {
  code: CurrenciesCode;
  name: string;
  price: number;
};

export const CurrencyCard: React.FC<CurrencyCardProps> = ({ code, name, price }) => {
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
        className={styles.currencyCard}
        onClick={openModal}
        role="button"
        tabIndex={0}
        aria-label={`Convert currency ${name}`}
      >
        <div className={styles.currencyCardIcon}>{icon}</div>
        <div className={styles.currencyCardContent}>
          <p className={styles.currencyName}>{name}</p>
          <p className={styles.currencyValue}>{fullPrice}</p>
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
};
