import React from 'react';
import './Item.styles.scss';

const Item = ({ name, price }) => (
	<div className="Item">
    {`${name}  -----  ${price}`}
  </div>
);

export default Item;