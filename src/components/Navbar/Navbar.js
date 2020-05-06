import React from 'react';
import './Navbar.styles.scss';

import Logo from '../../img/Logo.png';

const Navbar = () => (
  <div className='navbar'>
    <div className="logo-box">
      <img className='logo' src={Logo} alt="logo" />
    </div>

  </div>
)


export default Navbar;
