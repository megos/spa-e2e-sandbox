import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom'
import { CookiesProvider, useCookies } from 'react-cookie'
import { Login } from './Login'
import { Top } from './Top'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const [cookies] = useCookies(['token'])
  return (
    <Route
      {...rest}
      render={() => (cookies.token ? children : <Redirect to={'/login'} />)}
    />
  )
}

function App() {
  return (
    <CookiesProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/"><Top /></PrivateRoute>
        </Switch>
      </Router>
    </CookiesProvider>
  )
}

export default App
