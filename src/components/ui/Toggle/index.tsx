import { useState } from 'react';

import styles from './Toggle.module.scss';

export type ToggleProps = {
  checked?: boolean;
  onChange?: () => void;
};
export function Toggle({ onChange = () => {}, checked = false }: ToggleProps) {
  const [checkedState, setCheckedState] = useState(checked);

  const onChangeHandler = () => {
    setCheckedState(!checkedState);
    onChange();
  };

  return (
    <input
      className={styles.toggle}
      onChange={onChangeHandler}
      checked={checkedState}
      type="checkbox"
    />
  );
}
