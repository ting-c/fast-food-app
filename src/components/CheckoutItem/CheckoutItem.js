import React from 'react';
import './CheckoutItem.styles.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CheckoutItem = ({item}) => {
  const {imageUrl, name, quantity, price} = item;
  return (
			<Row className='CheckoutItem'>
				<Col className="itemImage">
					<img src={imageUrl} alt={name} />
				</Col>
				<Col className="description" xs={4}>
					{name}
				</Col>
				<Col className="quantity">{quantity}</Col>
				<Col className="price">{price}</Col>
			</Row>
	);
};

export default CheckoutItem;