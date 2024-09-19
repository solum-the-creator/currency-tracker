import React, { ChangeEvent } from 'react';

import styles from './index.module.scss';

type InputProps = {
  value: number | string;
  name: string;
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
  type?: 'number' | 'text';
  min?: number;
};

type InputState = {
  inputValue: string;
};

export class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);

    this.state = {
      inputValue: String(props.value),
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const newValue = event.target.value;

    this.setState({ inputValue: newValue });
    onChange(newValue);
  };

  render(): React.ReactNode {
    const { label, name, placeholder, min = 0, type = 'text' } = this.props;
    const { inputValue } = this.state;

    return (
      <div className={styles.inputWrapper}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <input
          type={type}
          value={inputValue}
          placeholder={placeholder}
          id={name}
          name={name}
          onChange={this.handleChange}
          className={styles.input}
          min={min}
        />
      </div>
    );
  }
}
