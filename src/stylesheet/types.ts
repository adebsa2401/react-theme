import { StyleSheet } from 'react-native'
import NamedStyles = StyleSheet.NamedStyles

export type StylesBuilder<T extends object, S extends NamedStyles<S> | NamedStyles<any>> = (theme: T) => S
