import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";


import PortfoliRouter from './PortfoliRouter';
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
            path="/portafolio"
            component={PortfoliRouter}
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