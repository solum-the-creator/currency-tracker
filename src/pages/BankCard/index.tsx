import { ErrorBoundary } from '@components/ErrorBoundary';
import { CurrencySearch } from '@components/ui/CurrencySearch';
import { MapContainer } from '@components/ui/MapContainer';
import { CurrenciesCode } from '@customTypes/currency';
import React from 'react';

import styles from './index.module.scss';

type BankCardProps = Record<string, never>;
type BankCardState = {
  selectedCurrency?: CurrenciesCode;
};
export class BankCard extends React.Component<BankCardProps, BankCardState> {
  constructor(props: BankCardProps) {
    super(props);

    this.state = {
      selectedCurrency: undefined,
    };
  }

  handleCurrencySelect = (currency?: CurrenciesCode) => {
    this.setState({ selectedCurrency: currency });
  };

  render(): React.ReactNode {
    const { selectedCurrency } = this.state;

    return (
      <section className={styles.bankCardSection}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Search currency in the bank</h1>
          <ErrorBoundary fallback={<p>Error loading currency list</p>}>
            <CurrencySearch onCurrencySelect={this.handleCurrencySelect} />
          </ErrorBoundary>
        </div>
        <ErrorBoundary fallback={<p>Error loading map</p>}>
          <MapContainer selectedCurrency={selectedCurrency} />
        </ErrorBoundary>
      </section>
    );
  }
}
