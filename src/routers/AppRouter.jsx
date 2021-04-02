import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";


import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

import Admin from '../views/Admin';

const AppRouter = () => {

  const isLoggedIn = false;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRouter
            exact
            path="/"
            component={AuthRouter}
            isAuthenticated={ isLoggedIn }
          />
          <PrivateRouter 
            path="/admin" 
            component={ Admin }
            isAuthenticated={ isLoggedIn }
          />
          <Redirect to="/portafolio" />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter