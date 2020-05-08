import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid, Column } from 'react-global-grid'
import { theme } from './theme.js'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Column span='1 / 4'>column 1</Column>
        <Column span='5 / -1'>column 2</Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App
