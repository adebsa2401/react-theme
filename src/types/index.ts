import { PropsWithChildren } from 'react'

export type ColorScheme = 'light' | 'dark'

export interface IThemeContext<T extends object = object> {
  colorScheme: ColorScheme
  setColorScheme: (colorScheme: ColorScheme) => void
  theme: T
}

export type ThemeProviderProps<T extends object = object> = PropsWithChildren & {
  initialColorScheme?: ColorScheme
  themeBuilder: (colorScheme: ColorScheme) => T
}

export type CreateThemeArgs = {
  default: object
  light?: object
  dark?: object
}
