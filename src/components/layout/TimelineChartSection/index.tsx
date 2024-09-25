import { TimelineChart } from '@components/ui/TimelineChart';
import { MarketData, MarketDataWithoutTime } from '@customTypes/market';
import React from 'react';

import { ChartModal } from '../ChartModal';

type TimelineChartSectionProps = {
  filteredData: MarketData[];
  onSaveModal: (data: MarketDataWithoutTime) => void;
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
            closePrice={selectedDataPoint.rateClose}
            openPrice={selectedDataPoint.rateOpen}
            highPrice={selectedDataPoint.rateHigh}
            lowPrice={selectedDataPoint.rateLow}
            date={selectedDataPoint.timeClose}
            onClose={onCloseModal}
            onSave={onSaveModal}
          />
        )}
      </React.Fragment>
    );
  }
}
