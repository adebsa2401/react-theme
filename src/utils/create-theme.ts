import type { ColorScheme, CreateThemeArgs } from '../types'

export const defaultTheme = {
  default: {},
  light: {},
  dark: {},
}

const createTheme = <D extends object, L extends object, K extends object>(theme: CreateThemeArgs<D, L, K>) => {
  type Theme = D & L & K

  const lightTheme = {
    ...(theme.dark ?? {}),
    ...(theme.default ?? {}),
    ...(theme.light ?? {}),
  } as Theme

  const darkTheme = {
    ...(theme.light ?? {}),
    ...(theme.default ?? {}),
    ...(theme.dark ?? {}),
  } as Theme

  return (colorScheme: ColorScheme) => {
    switch (colorScheme) {
      case 'dark':
        return darkTheme
      default:
        return lightTheme
    }
  }
}

export default createTheme
