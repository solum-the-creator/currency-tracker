import SearchIcon from '@assets/images/icons/search.svg';
import { CurrenciesCode } from '@customTypes/currency';
import { filterCurrenciesForSearch } from '@utils/filterData';
import React from 'react';
import { connect } from 'react-redux';

import { RootState } from '@/store';
import { selectCurrenciesCodes } from '@/store/currencies-info/selectors';

import styles from './index.module.scss';

type CurrencySearchProps = {
  currencies: CurrenciesCode[];
  onCurrencySelect: (currency?: CurrenciesCode) => void;
};

type CurrencySearchState = {
  searchQuery: string;
  filteredCurrencies: CurrenciesCode[];
};

class CurrencySearchComponent extends React.Component<CurrencySearchProps, CurrencySearchState> {
  constructor(props: CurrencySearchProps) {
    super(props);

    this.state = {
      searchQuery: '',
      filteredCurrencies: props.currencies,
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value;
    const { currencies, onCurrencySelect } = this.props;

    const filteredCurrencies = filterCurrenciesForSearch(searchQuery, currencies);

    this.setState({
      searchQuery,
      filteredCurrencies,
    });

    if (!searchQuery) {
      onCurrencySelect(undefined);
    }
  };

  handleCurrencySelect = (currency?: CurrenciesCode) => {
    const { onCurrencySelect } = this.props;
    this.setState({ searchQuery: currency, filteredCurrencies: [] });

    onCurrencySelect(currency);
  };

  render(): React.ReactNode {
    const { searchQuery, filteredCurrencies } = this.state;

    return (
      <div className={styles.currencySearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={this.handleInputChange}
          placeholder="Currency search..."
          className={styles.search}
        />
        <span className={styles.icon}>
          <SearchIcon />
        </span>
        {searchQuery && filteredCurrencies.length > 0 && (
          <ul className={styles.list}>
            {filteredCurrencies.map((currency) => (
              <li key={currency} className={styles.item}>
                <button
                  type="button"
                  onClick={() => this.handleCurrencySelect(currency)}
                  className={styles.button}
                >
                  {currency}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currencies: selectCurrenciesCodes(state),
});

export const CurrencySearch = connect(mapStateToProps)(CurrencySearchComponent);
