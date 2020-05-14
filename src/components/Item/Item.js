import React from 'react';
import './Item.styles.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from './../../redux/actions/cartActions';

const Item = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <Card className='h-100 shadow-sm bg-white rounded' style={{ width: '14rem' }} data-test='ItemComponent'>
      
      <Card.Img variant="top" src={imageUrl} width='50' height='200' />
      <Card.Body className='d-flex flex-column'>
        <div className='d-flex mb-2 justify-content-between'>
          <Card.Title className='mb-0 font-weight-bold'>
            {`${name}  -----  ${price}`}
          </Card.Title>
        </div>
        <ButtonGroup>
          <Alert>0</Alert>
          <Button variant='outline-primary' onClick={() => addItem(item)}>+</Button>
          <Button variant='outline-primary'>-</Button>
        </ButtonGroup>      
      </Card.Body>
    
    </Card>
)};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Item);