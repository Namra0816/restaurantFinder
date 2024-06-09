import React, {useState} from 'react'
import logo from '../../assets/logo.png'

import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {

  const [click, setClick] = useState(false);


  const handleClick = () => {
    setClick(!click)
  }

  return (
      <div className='container'>
        <div className='nav-bar'>
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li onClick={handleClick}>
              <NavLink className = "nav-link" to="/">Home</NavLink>
            </li>

            <li onClick={handleClick}>
              <NavLink className = "nav-link" to="/about">About</NavLink>
            </li>
            
            <li onClick={handleClick}>
              <NavLink className = "nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div> 
      </div>
  )
}

export default Navbar