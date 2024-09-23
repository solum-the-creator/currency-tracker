import { CurrenciesCode } from '@customTypes/currency';
import React from 'react';

import styles from './index.module.scss';

type BankPopupProps = {
  name: string;
  currencies: CurrenciesCode[];
};

export class BankPopup extends React.Component<BankPopupProps> {
  render() {
    const { name, currencies } = this.props;
    const availableCurrencies = currencies.join(', ');

    return (
      <div className={styles.bankPopup}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>Currencies: {availableCurrencies}</p>
      </div>
    );
  }
}
