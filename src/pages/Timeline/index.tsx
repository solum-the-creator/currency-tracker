import { TimelineChart } from '@components/ui/TimelineChart';
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

class Timeline extends React.Component<PropsFromRedux> {
  componentDidMount(): void {
    const { fetchMarketData } = this.props;
    fetchMarketData({ currencyCode: 'JPY', startDate: '2023-06-01', endDate: '2023-09-10' });
  }

  render(): ReactNode {
    const { data } = this.props;

    return (
      <section className={styles.timelineSection}>
        <h1>Currency Exchange Rate Timeline</h1>
        {data && <TimelineChart marketData={data} />}
      </section>
    );
  }
}

export default connector(Timeline);
