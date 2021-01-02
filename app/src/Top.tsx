import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const Top = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Top</Typography>
        </Toolbar>
      </AppBar>
      hi!
    </>
  )
}
