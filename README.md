# react-global-grid

> Components for creating a global CSS grid system in your React project.

[![NPM](https://img.shields.io/npm/v/react-global-grid.svg)](https://www.npmjs.com/package/react-global-grid) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Peer Dependencies (Requirements)

- react
- styled-system
- rebass

## Install

```bash
npm install --save react-global-grid
```

## Usage

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid, Column } from 'react-global-grid'

const theme = {
  gridStyles: {
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: 20
  }
}

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
```

## License

MIT © [UseAllFive](https://github.com/UseAllFive)
