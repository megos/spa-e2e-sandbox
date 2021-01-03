import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { api } from './api'
import { useCookies } from 'react-cookie'
import { AppBar } from './AppBar'

export const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const [, setCookie] = useCookies(['token'])

  const onSubmit = async () => {
    const result = await api.login({ id, password })
    if (result) {
      setCookie('token', result)
      history.push('/')
    }
  }

  return (
    <>
      <AppBar title="Login" />
      <Box display="flex" justifyContent="center">
        <Card style={{ width: 300, marginTop: 16 }}>
          <CardContent>
            <div>
              <TextField
                label="id"
                name="id"
                fullWidth
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div>
              <TextField
                label="password"
                name="password"
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
