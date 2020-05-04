import React from 'react';
import './Menu.styles.scss';

import menuItems from "../../items-store/menuItems";
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = () => (
  <div className='Menu'>
    <ul className="menu-list">
      { menuItems.map( ({id, ...otherProps}) => 
        <MenuItem key={id} {...otherProps} />
      )}
    </ul>
  </div>
)

export default Menu
