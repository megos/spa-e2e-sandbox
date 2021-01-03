import React from 'react'
import {
  AppBar as MuiAppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useCookies } from 'react-cookie'
import { api } from './api'

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
})

export const AppBar: React.FC<{ title: string }> = ({ title }) => {
  const classes = useStyles()
  const [cookies, , removeCookie] = useCookies(['token'])

  const logout = async () => {
    await api.logout()
    removeCookie('token')
  }

  return (
    <MuiAppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        {cookies.token && (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </MuiAppBar>
  )
}
