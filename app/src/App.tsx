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
import { Detail } from './Detail'

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
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/">
            <Top />
          </PrivateRoute>
          <PrivateRoute exact path="/details/:id">
            <Detail />
          </PrivateRoute>
        </Switch>
      </Router>
    </CookiesProvider>
  )
}

export default App
