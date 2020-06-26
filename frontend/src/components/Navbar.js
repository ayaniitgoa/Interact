import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/util';
import logo from '../images/iitgoalogo.png';
const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light fixed-top'>
      <a className='navbar-brand' href='/'>
        <img src={logo} alt='' className='iitgoalogo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNavDropdown'
        aria-controls='navbarNavDropdown'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNavDropdown'>
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='/'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/about'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Profile
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/profile/id'>
              My Profile
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/questions'>
              Questions
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='/'
              id='navbarDropdownMenuLink'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Login
            </a>
            <div
              className='dropdown-menu'
              aria-labelledby='navbarDropdownMenuLink'
            >
              <a className='dropdown-item' href='/login'>
                Login
              </a>
              <a className='dropdown-item' href='/register'>
                Register
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
