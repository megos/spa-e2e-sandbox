import React, { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { api } from './api'

export const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const onSubmit = async () => {
    const result = await api.login({ id, password })
    if (result) {
      history.push('/')
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Login</Typography>
        </Toolbar>
      </AppBar>
      <Box display="flex" justifyContent="center">
        <Card style={{ width: 300, marginTop: 16 }}>
          <CardContent>
            <div>
              <TextField
                label="id"
                fullWidth
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button onClick={onSubmit}>Login</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}
