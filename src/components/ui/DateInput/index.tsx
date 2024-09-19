import React, { ChangeEvent } from 'react';

import styles from './index.module.scss';

type DateInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  minDate?: string;
  maxDate?: string;
};

export class DateInput extends React.Component<DateInputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  render(): React.ReactNode {
    const { label, value, name, minDate, maxDate } = this.props;

    return (
      <div className={styles.dateInputWrapper}>
        <label className={styles.label} htmlFor={name}>
          {label && <span className={styles.labelText}>{label}</span>}
          <input
            type="date"
            id={name}
            value={value}
            onChange={this.handleChange}
            min={minDate}
            max={maxDate}
            className={styles.dateInput}
          />
        </label>
      </div>
    );
  }
}
