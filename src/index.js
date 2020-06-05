import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass/styled-components'
import { withTheme } from 'styled-components'

const Grid = withTheme(({ className, theme, children, sx, as = 'div' }) => {
  return (
    <Box
      className={className}
      as={as}
      sx={{
        px: 16,
        width: '100%',
        display: 'grid',
        maxWidth: 1264,
        mx: 'auto',
        ...theme.gridStyles,
        ...sx
      }}
    >
      {children}
    </Box>
  )
})

Grid.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.object,
  as: PropTypes.string,
  className: PropTypes.string
}

const Column = ({ className, children, span, sx, as = 'div' }) => {
  return (
    <Box
      className={className}
      as={as}
      sx={{
        gridColumn: span,
        ...sx
      }}
    >
      {children}
    </Box>
  )
}

Column.propTypes = {
  children: PropTypes.any,
  sx: PropTypes.object,
  as: PropTypes.string,
  span: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  className: PropTypes.string
}

export { Column, Grid }
