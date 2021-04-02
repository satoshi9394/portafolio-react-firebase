import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Portfolio from '../views/Portfolio';
import Login from '../views/Login';

const AuthRouter = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/portafolio" component={ Portfolio } />
          {
            console.log('pase por la de portafolio')
          }
          <Route path="/login" component={ Login } />
          <Redirect to="/portafolio" />
        </Switch>
      </div>
    </div>
  )
}

export default AuthRouter;
