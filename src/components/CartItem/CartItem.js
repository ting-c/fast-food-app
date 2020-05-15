import React from 'react';
import './CartItem.styles.scss';

const CartItem = ({ imageUrl, price, name, quantity} ) => (
  name ? (
    <div className="CartItem">
      <img src={imageUrl} alt='item' className='ItemImage'/>
      <div className="ItemDetails">
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x £{price}</span>
      </div>
    </div>
  ) : (
    null
  )
)

export default CartItem;