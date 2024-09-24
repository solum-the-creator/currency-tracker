import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from '@/store/theme/selectors';

export const useTheme = () => {
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : '';
  }, [theme]);

  return theme;
};
