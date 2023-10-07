import ThemeContext from "./theme-context";
import type {ThemeProviderProps} from "./@types";

export default function ThemeProvider({ children, theme, colorScheme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{
      theme,
      colorScheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}
