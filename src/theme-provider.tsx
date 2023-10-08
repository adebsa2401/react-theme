import ThemeContext from "./theme-context";
import type {ColorScheme, ThemeProviderProps} from "./@types";
import {useMemo, useState} from "react";

export default function ThemeProvider({ children, themeBuilder, initialColorScheme }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initialColorScheme);
  const theme = useMemo(() => themeBuilder(colorScheme), [colorScheme, themeBuilder]);

  return (
    <ThemeContext.Provider value={{
      theme,
      colorScheme,
      setColorScheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
