import React from 'react';
import './Item.styles.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from './../../redux/actions/cartActions';
import { deleteItem } from './../../redux/actions/cartActions';
import { createStructuredSelector } from "reselect";
import { cartItemsSelector } from './../../redux/selectors/cartSelectors';

const Item = ({ item, addItem, deleteItem, cartItems }) => {
	const { name, price, imageUrl } = item;
  const itemIsInCart = cartItems ? 
    cartItems.find(cartItem => cartItem.id === item.id) :
    null;
  const itemCount = itemIsInCart ? itemIsInCart.quantity : 0 ; 

  return (
		<Card className="Item shadow-sm rounded" data-test="ItemComponent">
			<Card.Img variant="top" src={imageUrl} width="50" height="200" />
			<Card.Body className="Body">
				<Card.Title className="Title font-weight-bold">
					<div className="Name">{name}</div>
					<div className="Price">{`£ ${price.toFixed(2)}`}</div>
				</Card.Title>
				<div className="DisplayCount">
					<span className="ItemCount">{itemCount}</span>
					<ButtonGroup className="ButtonGroup">
						<Button onClick={() => addItem(item)}>+</Button>
						<Button onClick={() => deleteItem(item)} id="minus">-</Button>
					</ButtonGroup>
				</div>
			</Card.Body>
		</Card>
	);
};

Item.propTypes = {
  item: PropTypes.shape({
		name: PropTypes.string,
		price: PropTypes.number,
		imageUrl: PropTypes.string
	})
}

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
});

export { Item };
export default connect(mapStateToProps, mapDispatchToProps)(Item);