import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';
import { auth } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';

import PortfoliRouter from './PortfoliRouter';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

import Admin from '../views/Admin';

const AppRouter = () => {

  const dispatch = useDispatch();
  const [ checking, setchecking ] = useState(true);
  const [ isLoggedIn, setisLoggedIn ] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged( async(user) => {
      if (user?.uid) {
        dispatch( login( user.uid, user.displayName ));
        setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setchecking(false);
    });
  }, [dispatch, setchecking, setisLoggedIn]);


  if (checking) {
    return (
      <h1>wait...</h1>
    )
  }


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