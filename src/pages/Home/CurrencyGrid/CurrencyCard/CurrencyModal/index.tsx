import { Button } from '@components/ui/Button';
import { CurrencySelect } from '@components/ui/CurrencySelect';
import { currenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';
import { useEffect, useRef } from 'react';

import styles from './index.module.scss';

type CurrencyModalProps = {
  code: CurrenciesCode;
  name: string;
  convertCode: CurrenciesCode;
  price: string;
  onClose?: () => void;
  onCurrencyChange?: (code: CurrenciesCode) => void;
};

export const CurrencyModal: React.FC<CurrencyModalProps> = ({
  price,
  code,
  name,
  convertCode,
  onClose = () => {},
  onCurrencyChange = () => {},
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return (
    <div className={styles.modal} role="presentation" onClick={handleOverlayClick}>
      <div
        className={styles.content}
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <h3 id="modal-title" className={styles.title}>
          {name} - {code}
        </h3>

        <div className={styles.info}>
          <CurrencySelect
            label="Convert to:"
            currencies={currenciesCodes}
            selectedCurrency={convertCode}
            onCurrencyChange={onCurrencyChange}
          />
          <p className={styles.price}>
            Price: <span className={styles.price_value}>{price}</span>
          </p>
        </div>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
