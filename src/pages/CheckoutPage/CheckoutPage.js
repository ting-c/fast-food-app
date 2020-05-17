import React from 'react';
import './CheckoutPage.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from './../../redux/selectors/cartSelectors';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CheckoutItem from './../../components/CheckoutItem/CheckoutItem';
import StripeButton from './../../components/StripeButton/StripeButton';

const CheckoutPage = ({ cartItems }) => { 
  const totalPrice = cartItems.reduce( (total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0);

  return (
		<Container className="CheckoutPage">
			<Row className="checkoutHeader">
				<Col className="checkoutItemImage">Item</Col>
				<Col className="checkoutDescription" xs={4}>
					Description
				</Col>
				<Col className="checkoutQuantity">Quantity</Col>
				<Col className="checkoutPrice">Price</Col>
			</Row>
			{cartItems.map((item) => (
				<div className="CheckoutItem">
					<CheckoutItem item={item} key={item.id} />
				</div>
			))}
			<div className="divider"></div>
			<div className="totalPrice">Total : £ {totalPrice.toFixed(2)}</div>
			<div className='StripeButton'><StripeButton price={totalPrice}/></div>
			<div className='testModeMessage'>
				*Please use the following card number for payments in test mode* <br />
				4242 4242 4242 4242 
			</div>
		</Container>
	);};

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
})

export default connect(mapStateToProps)(CheckoutPage);