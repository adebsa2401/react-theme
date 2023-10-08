import { StyleSheet } from 'react-native'
import NamedStyles = StyleSheet.NamedStyles

export type StylesBuilder<T, S> = (theme: T) => NamedStyles<S>
