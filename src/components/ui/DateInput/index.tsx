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

type DateInputState = {
  value: string;
};

export class DateInput extends React.Component<DateInputProps, DateInputState> {
  constructor(props: DateInputProps) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { onChange, value: currentValue, maxDate, minDate } = this.props;

    const isValidValue = value === '' || value === null || value > maxDate || value < minDate;

    if (isValidValue) {
      this.setState({ value: currentValue });
    } else {
      this.setState({ value });
      onChange(value);
    }
  };

  render(): React.ReactNode {
    const { label, name, minDate, maxDate } = this.props;
    const { value } = this.state;

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
