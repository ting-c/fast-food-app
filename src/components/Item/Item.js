import React from 'react';
import './Item.styles.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from './../../redux/actions/cartActions';

const Item = ({ item, addItem, cartItems }) => {
  const { name, price, imageUrl } = item;
  const itemIsInCart = cartItems.find(cartItem => cartItem.id === item.id);
  const itemCount = itemIsInCart ? itemIsInCart.quantity : 0 ; 

  return (
		<Card className="Item shadow-sm rounded" data-test="ItemComponent">
			<Card.Img variant="top" src={imageUrl} width="50" height="200" />
			<Card.Body className="Body">
				<Card.Title className="Title font-weight-bold">
					<div className="Name">{name}</div>
					<div className="Price">{`£ ${price}`}</div>
				</Card.Title>
				<div className="DisplayCount">
					<span className="ItemCount">{itemCount}</span>
					<ButtonGroup className="ButtonGroup">
						<Button onClick={() => addItem(item)}>+</Button>
						<Button id="minus">-</Button>
					</ButtonGroup>
				</div>
			</Card.Body>
		</Card>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);