import { PropsWithChildren, useMemo, useState } from "react";

import { ThemeContext, Theme } from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;

const ThemeProvider = (props: PropsWithChildren<ThemeProviderProps>) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
