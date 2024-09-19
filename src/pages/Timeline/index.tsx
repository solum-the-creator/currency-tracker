import { CurrencySelect } from '@components/ui/CurrencySelect';
import { TimelineChart } from '@components/ui/TimelineChart';
import { timelineCurenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';
import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '@/store';
import { fetchMarketData } from '@/store/market-data/thunk';

import styles from './index.module.scss';

const mapStateToProps = (state: RootState) => ({
  data: state.marketData.data,
  loading: state.marketData.loading,
  error: state.marketData.error,
});

const mapDispatchToProps = {
  fetchMarketData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type TimelineState = {
  selectedCurrency: CurrenciesCode;
};

class Timeline extends React.Component<PropsFromRedux, TimelineState> {
  constructor(props: PropsFromRedux) {
    super(props);
    this.state = {
      selectedCurrency: 'BNB',
    };
  }

  componentDidMount(): void {
    const { fetchMarketData } = this.props;
    const { selectedCurrency } = this.state;
    fetchMarketData({
      currencyCode: selectedCurrency,
      startDate: '2024-07-01',
      endDate: '2024-09-09',
    });
  }

  componentDidUpdate(prevProps: PropsFromRedux, prevState: TimelineState): void {
    const { selectedCurrency } = this.state;
    const { fetchMarketData } = this.props;

    if (prevState.selectedCurrency !== selectedCurrency) {
      fetchMarketData({
        currencyCode: selectedCurrency,
        startDate: '2024-07-01',
        endDate: '2024-09-09',
      });
    }
  }

  handleCurrencyChange = (newCurrency: CurrenciesCode) => {
    this.setState({ selectedCurrency: newCurrency });
  };

  render(): ReactNode {
    const { data } = this.props;
    const { selectedCurrency } = this.state;

    return (
      <section className={styles.timelineSection}>
        <h1>Currency Exchange Rate Timeline</h1>
        <CurrencySelect
          currencies={timelineCurenciesCodes}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={this.handleCurrencyChange}
        />
        {data && <TimelineChart marketData={data} />}
      </section>
    );
  }
}

export default connector(Timeline);
