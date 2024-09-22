import CurrencyData from '@components/layout/CurrencyData';
import { CurrencySelect } from '@components/ui/CurrencySelect';
import { timelineCurenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';
import React from 'react';

import styles from './index.module.scss';

type CurrencySectionProps = {
  selectedCurrency: CurrenciesCode;
  onCurrencyChange: (code: CurrenciesCode) => void;
};

export class CurrencySection extends React.PureComponent<CurrencySectionProps> {
  render(): React.ReactNode {
    const { selectedCurrency, onCurrencyChange } = this.props;

    return (
      <div className={styles.currencySection}>
        <CurrencySelect
          label="Choose currency:"
          currencies={timelineCurenciesCodes}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={onCurrencyChange}
        />
        <CurrencyData code={selectedCurrency} />
      </div>
    );
  }
}
