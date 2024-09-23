import { CurrencySearch } from '@components/ui/CurrencySearch';
import { MapContainer } from '@components/ui/MapContainer';
import { currenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';
import React from 'react';

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
      <div>
        <h1>Ban1kCard</h1>
        <CurrencySearch currencies={currenciesCodes} onCurrencySelect={this.handleCurrencySelect} />
        <MapContainer selectedCurrency={selectedCurrency} />
      </div>
    );
  }
}
