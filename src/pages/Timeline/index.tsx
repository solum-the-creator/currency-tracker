import { CurrencySelect } from '@components/ui/CurrencySelect';
import { DateInput } from '@components/ui/DateInput';
import { TimelineChart } from '@components/ui/TimelineChart';
import { timelineCurenciesCodes } from '@constants/currency';
import { CurrenciesCode } from '@customTypes/currency';
import { MarketData } from '@customTypes/market';
import { getFormattedDate } from '@utils/dateUtils';
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
  startDate: string;
  endDate: string;
  filteredData: MarketData[];
  initialData: MarketData[];
};

const minDate = getFormattedDate(30);
const maxDate = getFormattedDate(1);

class Timeline extends React.Component<PropsFromRedux, TimelineState> {
  constructor(props: PropsFromRedux) {
    super(props);

    this.state = {
      selectedCurrency: 'BNB',
      startDate: minDate,
      endDate: maxDate,
      filteredData: [],
      initialData: [],
    };
  }

  componentDidMount(): void {
    this.fetchData();
  }

  componentDidUpdate(prevProps: PropsFromRedux, prevState: TimelineState): void {
    const { selectedCurrency, startDate, endDate } = this.state;
    const { data } = this.props;

    if (prevState.selectedCurrency !== selectedCurrency) {
      this.fetchData();
    }

    if (prevProps.data !== data) {
      this.setState({ initialData: data }, this.filterData);
    }

    if (prevState.startDate !== startDate || prevState.endDate !== endDate) {
      this.filterData();
    }
  }

  fetchData = () => {
    const { fetchMarketData } = this.props;
    const { selectedCurrency } = this.state;

    fetchMarketData({
      currencyCode: selectedCurrency,
      startDate: minDate,
      endDate: maxDate,
    });
  };

  filterData = () => {
    const { startDate, endDate, initialData } = this.state;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const filteredData = initialData.filter((entry) => {
      const timeOpen = new Date(entry.time_open);
      const timeClose = new Date(entry.time_close);

      return (timeOpen >= start && timeOpen <= end) || (timeClose >= start && timeClose <= end);
    });

    this.setState({ filteredData });
  };

  handleCurrencyChange = (newCurrency: CurrenciesCode) => {
    this.setState({ selectedCurrency: newCurrency });
  };

  handleDateChange = (name: 'startDate' | 'endDate', value: string) => {
    this.setState(
      (prevState) => {
        const newDates = {
          ...prevState,
          [name]: value,
        };

        if (name === 'startDate' && newDates.endDate < value) {
          newDates.endDate = value;
        }
        if (name === 'endDate' && newDates.startDate > value) {
          newDates.startDate = value;
        }

        return newDates;
      },
      () => {
        this.filterData();
      },
    );
  };

  render(): ReactNode {
    const { selectedCurrency, startDate, endDate, filteredData } = this.state;

    return (
      <section className={styles.timelineSection}>
        <h1>Currency Exchange Rate Timeline</h1>
        <CurrencySelect
          currencies={timelineCurenciesCodes}
          selectedCurrency={selectedCurrency}
          onCurrencyChange={this.handleCurrencyChange}
        />
        <DateInput
          name="startDate"
          value={startDate}
          onChange={(value) => this.handleDateChange('startDate', value)}
          minDate={minDate}
          maxDate={maxDate}
          label="Start date"
        />
        <DateInput
          name="endDate"
          value={endDate}
          onChange={(value) => this.handleDateChange('endDate', value)}
          minDate={minDate}
          maxDate={maxDate}
          label="End date"
        />
        {filteredData.length > 0 && <TimelineChart marketData={filteredData} />}
      </section>
    );
  }
}

export default connector(Timeline);
