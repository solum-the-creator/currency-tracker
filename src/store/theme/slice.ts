import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = 'light' | 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'dark',
  reducers: {
    toggleTheme: (state: ThemeState) => {
      return state === 'light' ? 'dark' : 'light';
    },
    setTheme: (state: ThemeState, action: PayloadAction<ThemeState>) => action.payload,
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
