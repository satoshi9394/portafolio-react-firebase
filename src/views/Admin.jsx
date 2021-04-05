import React from 'react'
import { startLogout } from '../actions/auth';
import { useDispatch } from 'react-redux'

const Admin = () => {

  const dispatch = useDispatch();

  const handleLogout = () => (dispatch(startLogout()));

  return (
    <div>
      vista de admin.
      <button
        onClick={ handleLogout }
      >
        logout
      </button>
    </div>
  )
}

export default Admin
