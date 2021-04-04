import React from 'react'
import useForm from '../hooks/useForm'

const Login = () => {
  console.log('vista de login');
  const [ formValues, handleInputChange , reset] = useForm({
    email: 'usuario1@gmail.com',
    password: '123456'
  });

  const loading =  false;

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('hice submit')
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

