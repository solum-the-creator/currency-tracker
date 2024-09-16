import { Button } from '@components/ui/Button';
import { CurrencySelect } from '@components/ui/CurrencySelect';
import { currenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currecny';
import { useEffect, useRef } from 'react';

import styles from './CurrencyModal.module.scss';

type CurrencyModalProps = {
  code: CurrenciesCode;
  name: string;
  convertCode: CurrenciesCode;
  price: string;
  onClose?: () => void;
  onCurrencyChange?: (code: CurrenciesCode) => void;
};

export function CurrencyModal({
  price,
  code,
  name,
  convertCode,
  onClose = () => {},
  onCurrencyChange = () => {},
}: CurrencyModalProps) {
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className={styles.modal}
      role="presentation"
      onKeyDown={handleKeyDown}
      onClick={handleOverlayClick}
    >
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
}
