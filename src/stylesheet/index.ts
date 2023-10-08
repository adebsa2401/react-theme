import { StylesBuilder } from './types'
import { StyleSheet } from 'react-native'
import NamedStyles = StyleSheet.NamedStyles

export const create = <T extends object, S extends NamedStyles<S> | NamedStyles<any>>(
  stylesBuilder: StylesBuilder<T, S>,
) => stylesBuilder
