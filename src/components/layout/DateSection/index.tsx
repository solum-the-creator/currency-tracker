import { DateInput } from '@components/ui/DateInput';
import { getFormattedDate } from '@utils/dateUtils';
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

  render(): React.ReactNode {
    const { startDate, endDate, onDateChange } = this.props;

    return (
      <div className={styles.dateSection}>
        <DateInput
          name="startDate"
          label="Start date:"
          value={startDate}
          onChange={(value) => onDateChange('startDate', value)}
          minDate={this.minDate}
          maxDate={this.maxDate}
        />

        <DateInput
          name="endDate"
          label="End date:"
          value={endDate}
          onChange={(value) => onDateChange('endDate', value)}
          minDate={this.minDate}
          maxDate={this.maxDate}
        />
      </div>
    );
  }
}
