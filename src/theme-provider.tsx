import React from 'react'
import ThemeContext from './theme-context'
import type { ThemeProviderProps } from './types'

export default function ThemeProvider({ children, themeBuilder, colorScheme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider
      value={{
        theme: themeBuilder(colorScheme),
        colorScheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
