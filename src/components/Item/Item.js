import React from 'react';
import './Item.styles.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from './../../redux/actions/cartActions';

const Item = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
		<Card className="Item shadow-sm rounded" data-test="ItemComponent">
			<Card.Img variant="top" src={imageUrl} width="50" height="200" />
			<Card.Body className="Body">
				<Card.Title className="Title font-weight-bold">
					<div className="Name">{name}</div>
					<div className="Price">{`£ ${price}`}</div>
				</Card.Title>
				<div className="DisplayCount">
					<span className="ItemCount">0</span>
					<ButtonGroup className="ButtonGroup">
						<Button onClick={() => addItem(item)}>+</Button>
						<Button id="minus">-</Button>
					</ButtonGroup>
				</div>
			</Card.Body>
		</Card>
	);};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Item);