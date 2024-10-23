import { dateTheme } from '@constants/dateTheme';
import { RangeCalendar } from '@solumzy/datepicker';
import { getFormattedDate } from '@utils/dateUtils';
import React from 'react';

import styles from './index.module.scss';

type DateSectionProps = {
  startDate: string;
  endDate: string;
  onRangeSelect?: (startDate: string, endDate: string) => void;
};

export class DateSection extends React.PureComponent<DateSectionProps> {
  minDate: string;

  maxDate: string;

  constructor(props: DateSectionProps) {
    super(props);

    this.minDate = getFormattedDate(30);
    this.maxDate = getFormattedDate(1);
  }

  handleRangeSelect = (startDate: Date, endDate: Date) => {
    const { onRangeSelect } = this.props;

    if (onRangeSelect) {
      onRangeSelect(startDate.toISOString(), endDate.toISOString());
    }
  };

  render(): React.ReactNode {
    const { startDate, endDate } = this.props;

    return (
      <div className={styles.dateSection}>
        <RangeCalendar
          theme={dateTheme}
          onRangeSelect={this.handleRangeSelect}
          rangeStart={new Date(startDate)}
          rangeEnd={new Date(endDate)}
          minDate={new Date(this.minDate)}
          maxDate={new Date(this.maxDate)}
        />
      </div>
    );
  }
}
