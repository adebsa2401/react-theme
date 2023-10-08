import { StylesBuilder } from './stylesheet/types'
import useTheme from './use-theme'
import { StyleSheet } from 'react-native'

const useStyles = <T extends object, S>(stylesBuilder: StylesBuilder<T, S>) => {
  const themeContext = useTheme<T>()
  return {
    ...themeContext,
    styles: StyleSheet.create(stylesBuilder(themeContext.theme)),
  }
}

export default useStyles
