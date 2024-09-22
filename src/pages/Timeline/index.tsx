import { CurrencySection } from '@components/layout/CurrencySection';
import { DateSection } from '@components/layout/DateSection';
import { TimelineChartSection } from '@components/layout/TimelineChartSection';
import { Button } from '@components/ui/Button';
import { Notification } from '@components/ui/Notification';
import { CurrenciesCode } from '@customTypes/currency';
import { MarketData } from '@customTypes/market';
import { getFormattedDate } from '@utils/dateUtils';
import { filterCurrencyDataByDate } from '@utils/filterData';
import { notificationObserver } from '@utils/observer/notificationObserver';
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
  originalData: MarketData[];
  filteredData: MarketData[];
  initialData: MarketData[];
  isDataModified: boolean;
  selectedDataPoint?: MarketData;
};

class Timeline extends React.Component<PropsFromRedux, TimelineState> {
  minDate: string;

  maxDate: string;

  constructor(props: PropsFromRedux) {
    super(props);

    this.minDate = getFormattedDate(30);
    this.maxDate = getFormattedDate(1);

    this.state = {
      selectedCurrency: 'BNB',
      startDate: this.minDate,
      endDate: this.maxDate,
      filteredData: [],
      initialData: [],
      originalData: [],
      selectedDataPoint: undefined,
      isDataModified: false,
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
      this.setState({ initialData: data, originalData: data }, this.filterData);
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
      startDate: this.minDate,
      endDate: this.maxDate,
    });
  };

  filterData = () => {
    const { startDate, endDate, initialData } = this.state;

    const filteredData = filterCurrencyDataByDate(startDate, endDate, initialData);

    this.setState({ filteredData });
  };

  handleCurrencyChange = (newCurrency: CurrenciesCode) => {
    this.setState({ selectedCurrency: newCurrency });
  };

  handleDateChange = (name: 'startDate' | 'endDate', value: string) => {
    this.setState((prevState) => {
      const newDates = this.updateDates(prevState, name, value);
      return newDates;
    }, this.filterData);
  };

  updateDates = (prevState: TimelineState, name: 'startDate' | 'endDate', value: string) => {
    const newDates = { ...prevState, [name]: value };

    if (name === 'startDate' && newDates.endDate < value) {
      newDates.endDate = value;
    }
    if (name === 'endDate' && newDates.startDate > value) {
      newDates.startDate = value;
    }

    return newDates;
  };

  handlePointClick = (data: MarketData) => {
    this.setState({ selectedDataPoint: data });
  };

  handleCloseModal = () => {
    this.setState({ selectedDataPoint: undefined });
  };

  handleSaveModal = (data: Omit<MarketData, 'time_open' | 'time_close'>) => {
    const { selectedDataPoint, initialData } = this.state;

    if (!selectedDataPoint) {
      return;
    }

    const updatedInitialData = initialData.map((dataPoint) =>
      dataPoint.time_close === selectedDataPoint.time_close ? { ...dataPoint, ...data } : dataPoint,
    );

    this.setState({ initialData: updatedInitialData, isDataModified: true }, () => {
      this.filterData();
      notificationObserver.notify('Data updated successfully');
    });
  };

  handleReset = () => {
    this.setState(
      (prevState) => ({
        initialData: prevState.originalData,
        selectedDataPoint: undefined,
        isDataModified: false,
      }),
      this.filterData,
    );
  };

  render(): ReactNode {
    const {
      selectedCurrency,
      startDate,
      endDate,
      filteredData,
      selectedDataPoint,
      isDataModified,
    } = this.state;

    return (
      <section className={styles.timelineSection}>
        <Notification />
        <div className={styles.content}>
          <CurrencySection
            selectedCurrency={selectedCurrency}
            onCurrencyChange={this.handleCurrencyChange}
          />
          <DateSection
            startDate={startDate}
            endDate={endDate}
            onDateChange={this.handleDateChange}
          />
          <p className={styles.description}>
            <i>Click on any candle in the chart to view and edit its details.</i>
          </p>
          <div className={styles.reset}>
            <Button
              className={styles.resetButton}
              onClick={this.handleReset}
              disabled={!isDataModified}
            >
              Reset Data
            </Button>
          </div>
          <TimelineChartSection
            filteredData={filteredData}
            onSaveModal={this.handleSaveModal}
            onPointClick={this.handlePointClick}
            onCloseModal={this.handleCloseModal}
            selectedDataPoint={selectedDataPoint}
          />
        </div>
      </section>
    );
  }
}

export default connector(Timeline);
