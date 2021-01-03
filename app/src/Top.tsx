import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { api } from './api'
import { AppBar } from './AppBar'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

export const Top = () => {
  const classes = useStyles()
  const [data, setData] = useState<number[]>([])

  useEffect(() => {
    api.getData().then(setData)
  }, [])

  return (
    <>
      <AppBar title="Top" />
      <Box p={3}>
        <Grid container spacing={3}>
          {data.length === 0
            ? [...Array(4)].map((_, i) => (
                <Grid item xs={3} key={i}>
                  <Skeleton height={64} />
                </Grid>
              ))
            : data.map((d) => (
                <Grid item xs={3} key={d}>
                  <Paper className={classes.paper}>data: {d}</Paper>
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  )
}
