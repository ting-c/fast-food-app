import React from 'react';
import './Item.styles.scss';

const Item = ({ name, price, imageUrl }) => (
	<div 
    style={
      { backgroundImage: `url(${imageUrl})` }
    }
    className="Item">
    <p>
      {`${name}  -----  ${price}`}
    </p>
  </div>
);

export default Item;