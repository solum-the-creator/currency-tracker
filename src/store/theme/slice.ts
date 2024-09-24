import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeState = 'light' | 'dark';

const initialState: ThemeState = 'dark' as ThemeState;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    setTheme: (state, action: PayloadAction<ThemeState>) => action.payload,
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
