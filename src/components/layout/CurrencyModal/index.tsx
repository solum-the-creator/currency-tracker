import { Modal } from '@components/layout/Modal';
import { Button } from '@components/ui/Button';
import { CurrencySelect } from '@components/ui/CurrencySelect';
import { currenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';

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
  return (
    <Modal onClose={onClose}>
      <h3 className={styles.title}>
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
          Price: <span className={styles.priceValue}>{price}</span>
        </p>
      </div>
      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
};
