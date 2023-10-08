import { StylesBuilder } from './stylesheet/types'
import useTheme from './use-theme'

const useStyles = <T extends object, S>(stylesBuilder: StylesBuilder<T, S>) => {
  const { theme } = useTheme<T>()
  return stylesBuilder(theme);
}

export default useStyles
