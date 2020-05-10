import React from 'react';
import './Item.styles.scss';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';

const Item = ({ name, price, imageUrl }) => (
  <Card className='h-100 shadow-sm bg-white rounded' style={{ width: '14rem' }}>
    
    <Card.Img variant="top" src={imageUrl} width='50' height='200' />
    <Card.Body className='d-flex flex-column'>
      <div className='d-flex mb-2 justify-content-between'>
        <Card.Title className='mb-0 font-weight-bold'>
          {`${name}  -----  ${price}`}
        </Card.Title>
      </div>
      <ButtonGroup>
        <Alert>0</Alert>
        <Button variant='outline-primary'>+</Button>
        <Button variant='outline-primary'>-</Button>
      </ButtonGroup>
      
    </Card.Body>
  
  </Card>
);

export default Item;