import React from 'react';
import './CheckoutItem.styles.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from 'react-redux';
import { addItem, deleteItem } from './../../redux/actions/cartActions';

const CheckoutItem = ({item, addItem, deleteItem}) => {
  const {imageUrl, name, quantity, price} = item;
  return (
		<Row className="CheckoutItem">
			<Col className="itemImage">
				<img src={imageUrl} alt={name} />
			</Col>
			<Col className="description" xs={4}>
				{name}
			</Col>
			<Col className="quantity">
				<span className='delete' onClick={() => deleteItem(item)}>{"<"}</span>
				<span className='itemCount'>{quantity}</span>
				<span className='add' onClick={() => addItem(item)}>{">"}</span>
			</Col>
			<Col className="price">{quantity * price}</Col>
		</Row>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	deleteItem: item => dispatch(deleteItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);