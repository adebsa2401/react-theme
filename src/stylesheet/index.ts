import { StylesBuilder } from './types'

export const create = <T extends object, S>(stylesBuilder: StylesBuilder<T, S>) => stylesBuilder
