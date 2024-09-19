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
  onPointClick?: (data: MarketData) => void;
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

  handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { onPointClick, marketData } = this.props;
    const chart = ChartJS.getChart(event.currentTarget);

    if (chart) {
      const elements = chart.getElementsAtEventForMode(
        event.nativeEvent,
        'nearest',
        { intersect: true },
        true,
      );

      if (elements.length) {
        const { index } = elements[0] as { index: number };

        if (index !== undefined && marketData[index]) {
          const data = marketData[index];
          if (onPointClick) {
            onPointClick(data);
          }
        }
      }
    }
  };

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
          height={600}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
