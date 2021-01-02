import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Login } from './Login'
import { Top } from './Top'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Top} />
      </Switch>
    </Router>
  )
}

export default App
