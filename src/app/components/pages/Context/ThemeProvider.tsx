import React, {createContext, useContext} from 'react';

export type ThemeContextValue = {
  themeValue?: string;
  toggleThemeValue: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  themeValue: 'light',
  toggleThemeValue: () => {
    console.log('toggleThemeValue');
  },
});

type ThemeProviderProps = {
  value: ThemeContextValue;
};

export const useThemeContext: () => ThemeContextValue = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: React.SFC<ThemeProviderProps> = ({value, children}) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
