import React, { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid, Column } from 'react-global-grid'
import { theme } from './theme.js'
import { gg } from 'css-grid-guides'
import 'react-global-grid/dist/index.css'

const App = () => {
  useEffect(() => {
    gg()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Grid className='grid'>
        <Column sx={{ bg: 'black', color: 'white', height: 200 }} span='1 / 4'>
          column 1
        </Column>
        <Column sx={{ bg: 'green', color: 'white', height: 200 }} span='5 / 7'>
          column 2
        </Column>
        <Column sx={{ bg: 'blue', color: 'white', height: 200 }} span='8 / -1'>
          column 3
        </Column>
      </Grid>
    </ThemeProvider>
  )
}

export default App
