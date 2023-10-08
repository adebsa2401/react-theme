import {createContext} from "react";
import type {IThemeContext} from "./@types";

const ThemeContext = createContext<IThemeContext>({
  colorScheme: "light",
  theme: {},
  setColorScheme: () => {}
});

export default ThemeContext;
