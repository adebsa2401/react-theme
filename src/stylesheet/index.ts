import { StylesBuilder } from './types'

export const create = <T extends object, S extends object>(stylesBuilder: StylesBuilder<T, S>) => stylesBuilder
