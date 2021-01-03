import React from 'react'
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { api } from './api'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
})

export const Top = () => {
  const classes = useStyles()
  const [, , removeCookie] = useCookies()

  const logout = async () => {
    await api.logout()
    removeCookie('token')
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Top
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      hi!
    </>
  )
}
