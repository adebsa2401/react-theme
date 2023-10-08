import ThemeContext from './theme-context'
import { useContext } from 'react'
import type { IThemeContext } from './types'

const useTheme = <T extends object = object>() => {
  return useContext(ThemeContext) as IThemeContext<T>
}

export default useTheme
