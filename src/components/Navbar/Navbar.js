import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // State to manage the toggle state of the menu
  const [click, setClick] = useState(false);

  // State to manage the background color change on scroll
  const [color, setColor] = useState(false);

  // Function to change the color state based on the scroll position
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // Adding an event listener for the scroll event
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  // Function to handle the menu click event
  const handleClick = () => {
    setClick(!click);   // Toggle the click state
  };

  return (
    // Applying the appropriate class based on the color state
    <div className={color ? "header header-bg" : 'header'}>
      <div className='container'>
        <div className='nav-bar'>
          <Link to="/">
            <img src={logo} alt="logo" width={50} />
            <span className="restaurant-name">DineDiscover</span>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li onClick={handleClick}>  {/* List item for the Home link */}
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            
           
            <li onClick={handleClick}>   {/* List item for the Contact link */}
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* Hamburger menu icon */}
          <div className='hamburger' onClick={handleClick}>
            {click ? (
              <FaTimes size={20} style={{color: "#fff"}} />   // Close icon when menu is open
            ) : (
              <FaBars size={20} style={{color: "#fff"}}/>   // Bars icon when menu is closed
            )}
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Navbar;
