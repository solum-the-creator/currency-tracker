import 'chartjs-adapter-date-fns';

import { MarketData } from '@customTypes/market';
import { DataChart, DataConfigType } from '@customTypes/timeline';
import { Chart as ChartJS, registerables, TimeSeriesScale, Tooltip } from 'chart.js';
import React from 'react';
import { Chart as ChartComponent } from 'react-chartjs-2';

import styles from './index.module.scss';
import { TimelineConfig } from './timeline.config';

type TimelineChartProps = {
  marketData: MarketData[];
};

export type TimelineChartState = {
  data: DataChart[];
};

ChartJS.register(Tooltip, TimeSeriesScale, ...registerables);

export class TimelineChart extends React.Component<TimelineChartProps, TimelineChartState> {
  getConfig(): DataConfigType {
    const config = TimelineConfig.data;
    const data = this.formatDataForChart();

    return {
      datasets: [
        {
          ...config.datasets[0],
          label: config.datasets[0].label,
          data,
          backgroundColor: config.datasets[0].backgroundColor,
        },
      ],
    };
  }

  formatDataForChart(): DataChart[] {
    const { marketData } = this.props;

    return marketData.map((item) => ({
      x: new Date(item.time_open).getTime(),
      o: item.rate_open,
      h: item.rate_high,
      l: item.rate_low,
      c: item.rate_close,
      s: [item.rate_open, item.rate_close],
    }));
  }

  render() {
    return (
      <div className={styles.timelineChart}>
        <ChartComponent
          type="bar"
          data={this.getConfig()}
          options={TimelineConfig.options}
          plugins={TimelineConfig.plugins}
          height={500}
        />
      </div>
    );
  }
}
