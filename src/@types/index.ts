import {PropsWithChildren} from "react";

export type ColorScheme = "light" | "dark";

// T is an object type with a default value of an empty object
export interface IThemeContext<T extends object = {}> {
  colorScheme: ColorScheme;
  theme: T;
}

export type ThemeProviderProps<T extends object = {}> = PropsWithChildren & {
  colorScheme?: ColorScheme;
  theme?: T;
}
