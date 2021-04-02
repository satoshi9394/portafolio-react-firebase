import React from 'react'
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

const PublicRouter = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  console.log(`valor de la auth es: ${isAuthenticated}`);
  return (
    <Route {...rest}
      component={ (props) => (
        ( isAuthenticated ) 
          ? <Redirect to='/admin' />
          : <Component { ...props } /> 
      )}
    />
  )
}

PublicRouter.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PublicRouter