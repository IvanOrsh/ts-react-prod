import { PropsWithChildren, useMemo, useState } from "react";

import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "./ThemeContext";

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
