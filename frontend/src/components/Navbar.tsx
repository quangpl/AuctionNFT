import React, { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Dropdown from './Dropdown';
import { Menu, Button } from 'antd';
import {
   
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    
  } from '@ant-design/icons';
function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          EzGroup
          <i className='fab fa-firstdraft' />
        </Link>
        
        <div className='menu-icon'  onClick={handleClick}>
        {React.createElement(click ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </div>
        <ul  className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onClick={closeMobileMenu}>
            <Link to='/' className='nav-links' >
              Home
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={closeMobileMenu}
          >
            <Link
              to='/create-item'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Create <i className='fas fa-caret-down' />
            </Link>
            
          </li>
          <li className='nav-item'>
            <Link
              to='/profile'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Profile
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to='/register'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Register
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;