import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { Login } from './Login'
import { userState } from './recoil'
import { Top } from './Top'

const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const user = useRecoilValue(userState)
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to={'/login'} />)}
    />
  )
}

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/"><Top /></PrivateRoute>
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App
