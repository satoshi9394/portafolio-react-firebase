import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Portfolio from '../views/Portfolio';
import Login from '../views/Login';
import Footer from '../components/Footer';

const AuthRouter = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <Switch>
          <Route path="/portafolio/login" component={ Login } />
          <Route path="/portafolio/angel" component={ Portfolio } />
          <Redirect to="/portafolio/angel" />
        </Switch>
      </div>
      <Footer/>
    </div>
  )
}

export default AuthRouter;
