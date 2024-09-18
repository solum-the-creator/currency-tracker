import { useState } from 'react';

import styles from './index.module.scss';

export type ToggleProps = {
  checked?: boolean;
  onChange?: () => void;
};
export const Toggle: React.FC<ToggleProps> = ({ onChange = () => {}, checked = false }) => {
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
};
