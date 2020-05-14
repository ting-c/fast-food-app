import React from 'react';
import menuItems from "../../items-store/menuItems";
import MenuItem from '../../components/MenuItem/MenuItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Menu = () => {
  const menuList = menuItems.map(({ id, ...otherProps }) =>
    <MenuItem key={id} {...otherProps} />
  )

  return (
    <div className='MenuPage' data-test='MenuPageComponent'>
      <Container className='Container'>
        <Row className='justify-content-around align-content-between flex-wrap p-3'>
          { menuList }
        </Row>
      </Container>
    </div>
  )
}

export default Menu
