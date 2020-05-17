import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import menuItemsSelector from './../../redux/selectors/menuItemsSelector';
import MenuItem from '../../components/MenuItem/MenuItem';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Menu = ({menuItems}) => {
  const menuList = menuItems.map(({ id, ...otherProps }) =>
    <MenuItem key={id} {...otherProps} />
  );

  return (
    <div className='MenuPage' data-test='MenuPageComponent'>
      <Container className='Container'>
        <Row className='justify-content-around align-content-between flex-wrap p-3'>
          { menuList }
        </Row>
      </Container>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  menuItems: menuItemsSelector
})

export default connect(mapStateToProps)(Menu);
