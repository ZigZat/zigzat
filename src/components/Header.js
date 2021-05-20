import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import './styles/header.css'
import { Button } from './Button'
import logo from './images/logo.png' 


function Header() {

  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


    return (
        <nav className="navbar">

       <Link to='/' onClick={closeMobileMenu}>
          <img className='navbar-logo' src={logo}></img>
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'} >

          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>


          <li className='nav-item'>
            <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>

            
          <li className='nav-item'>
            <Link to='/watchlist' className='nav-links' onClick={closeMobileMenu}>
             Watchlist
            </Link>
          </li>


          <li className='nav-item'>
            <Link to='/login' className='nav-links' id='login' onClick={closeMobileMenu}>
              Login
            </Link>
          </li>

            
          <li className='nav-item'>
            <Link to='/signup' className='nav-links' id="sign-up" onClick={closeMobileMenu}>
              Sign up
            </Link>
          </li>

          <li>
            <Link
              to='/listing'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sell An Item
            </Link>
          </li>

            </ul>
            <Button />
        </nav>   
    )
}

export default Header