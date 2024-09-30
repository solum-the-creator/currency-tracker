import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '@/store';
import { selectTheme } from '@/store/theme/selectors';
import { toggleTheme } from '@/store/theme/slice';

import styles from './index.module.scss';

export const ToggleTheme: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector(selectTheme);

  const checked = theme === 'light';

  const handleChange = () => {
    dispatch(toggleTheme());
  };

  return (
    <input
      className={styles.toggle}
      onChange={handleChange}
      checked={checked}
      type="checkbox"
      data-testid="theme-toggle"
    />
  );
};
