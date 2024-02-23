import React from 'react'
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon
} from '@mui/icons-material'
import { createTheme, Fab, ThemeProvider, useMediaQuery } from '@mui/material'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

const withTheme = (children: () => React.ReactNode) => () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const [mode, setMode] = React.useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  )
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children()}
        <Fab
          color="primary"
          onClick={colorMode.toggleColorMode}
          size="small"
          sx={{ position: 'fixed', right: '1rem', bottom: '1rem' }}
        >
          {mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </Fab>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export { withTheme }
