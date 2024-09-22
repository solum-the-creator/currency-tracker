import { TimelineChart } from '@components/ui/TimelineChart';
import { MarketData } from '@customTypes/market';
import React from 'react';

import { ChartModal } from '../ChartModal';

type TimelineChartSectionProps = {
  filteredData: MarketData[];
  onSaveModal: (data: Omit<MarketData, 'time_open' | 'time_close'>) => void;
  onPointClick: (data: MarketData) => void;
  onCloseModal: () => void;
  selectedDataPoint?: MarketData;
};

export class TimelineChartSection extends React.PureComponent<TimelineChartSectionProps> {
  render(): React.ReactNode {
    const { filteredData, onSaveModal, onPointClick, onCloseModal, selectedDataPoint } = this.props;

    return (
      <React.Fragment>
        {filteredData.length > 0 && (
          <TimelineChart onPointClick={onPointClick} marketData={filteredData} />
        )}
        {selectedDataPoint && (
          <ChartModal
            closePrice={selectedDataPoint.rate_close}
            openPrice={selectedDataPoint.rate_open}
            highPrice={selectedDataPoint.rate_high}
            lowPrice={selectedDataPoint.rate_low}
            date={selectedDataPoint.time_close}
            onClose={onCloseModal}
            onSave={onSaveModal}
          />
        )}
      </React.Fragment>
    );
  }
}
