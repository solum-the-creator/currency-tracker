import { DateInput } from '@components/ui/DateInput';
import { addDays, getFormattedDate } from '@utils/dateUtils';
import React from 'react';

import styles from './index.module.scss';

type DateSectionProps = {
  startDate: string;
  endDate: string;
  onDateChange?: (name: 'startDate' | 'endDate', value: string) => void;
};

export class DateSection extends React.PureComponent<DateSectionProps> {
  minDate: string;

  maxDate: string;

  constructor(props: DateSectionProps) {
    super(props);

    this.minDate = getFormattedDate(30);
    this.maxDate = getFormattedDate(1);
  }

  handleStartDateChange = (value: string) => {
    const { onDateChange } = this.props;

    if (onDateChange) {
      onDateChange('startDate', value);
    }
  };

  handleEndDateChange = (value: string) => {
    const { onDateChange } = this.props;

    if (onDateChange) {
      onDateChange('endDate', value);
    }
  };

  render(): React.ReactNode {
    const { startDate, endDate } = this.props;

    const minEndDate = startDate ? addDays(startDate, 10) : this.minDate;
    const effectiveMaxEndDate = this.maxDate;

    return (
      <div className={styles.dateSection}>
        <DateInput
          name="startDate"
          label="Start date:"
          value={startDate}
          onChange={this.handleStartDateChange}
          minDate={this.minDate}
          maxDate={this.maxDate}
        />

        <DateInput
          name="endDate"
          label="End date:"
          value={endDate}
          onChange={this.handleEndDateChange}
          minDate={minEndDate}
          maxDate={effectiveMaxEndDate}
        />
      </div>
    );
  }
}
