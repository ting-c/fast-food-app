import React from 'react';
import './CheckoutDisplay.styles.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { cartItemsSelector } from './../../redux/selectors/cartSelectors';
import Button from 'react-bootstrap/Button';

const CheckoutDisplay = ({cartItems, history}) => {
  const totalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  if (cartItems.length) {
    return (
      <div className="checkoutDisplay">
        <Button
          className="checkoutButton"
          variant="success"
          onClick={() => history.push("/checkout")}
        >
          Checkout
        </Button>
        <div className='totalPriceDisplay'> Total : £ {totalPrice.toFixed(2)}</div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  cartItems: cartItemsSelector(state)
})

export default withRouter(connect(mapStateToProps)(CheckoutDisplay));