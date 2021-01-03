import React, { useEffect, useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { api } from './api'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const Top = () => {
  const classes = useStyles()
  const [, , removeCookie] = useCookies()
  const [data, setData] = useState<number[]>([])

  const logout = async () => {
    await api.logout()
    removeCookie('token')
  }

  useEffect(() => {
    api.getData().then(setData)
  }, [])

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
      <Box p={3}>
        <Grid container spacing={3}>
          {data.map((d) => (
            <Grid item xs={3} key={d}>
              <Paper className={classes.paper}>data: {d}</Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
