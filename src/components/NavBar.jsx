import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="header">
      <Link 
        to="/portafolio/angel"
        className="header__title"
      >
        Portafolio
      </Link>
      <Link to="/portafolio/login">
        <button
          className="header__button"
        >
          login
        </button>
      </Link>
    </div>
  )
}

export default NavBar
