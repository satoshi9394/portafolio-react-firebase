import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';
import { startLogingEmailPassword } from '../actions/auth';
import { removeError, setError } from '../actions/ui';
import useForm from '../hooks/useForm';

const Login = () => {

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.ui);
  
  const [ formValues, handleInputChange , reset] = useForm({
    email: 'angelsb94@gmail.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch( startLogingEmailPassword(email, password) );
      reset();
    }
  }

  const isFormValid = () => {
    if(!validator.isEmail(email)) {
      dispatch( setError('Email no valido') );
      return false;
    } else if( password.length <= 5) {
      dispatch( setError('Password muy corto') );
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <h3 className="auth__title">Login</h3>
        <form 
          onSubmit={handleLogin}
          className="auth__form"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            value={email}
            onChange={ handleInputChange }
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            value={password}
            onChange={ handleInputChange }
          />
          <button
            className="auth__button"
            type="submit"
            disabled={ loading }
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;

