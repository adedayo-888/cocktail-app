import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/cocktailLogo.svg';

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <img src={logo} alt='cockytail' className='logo' />
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
