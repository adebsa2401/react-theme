import { PropsWithChildren } from 'react'

export type ColorScheme = 'light' | 'dark' | null | undefined

export interface IThemeContext<T extends object = object> {
  colorScheme: ColorScheme
  theme: T
}

export type ThemeProviderProps<T extends object = object> = PropsWithChildren & {
  colorScheme: ColorScheme
  themeBuilder: (colorScheme: ColorScheme) => T
}

export type CreateThemeArgs<D extends object, L extends object, K extends object> = {
  default?: D
  light?: L
  dark?: K
}
