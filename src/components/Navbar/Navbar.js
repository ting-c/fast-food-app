import React from 'react';
import './NavBar.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import { withRouter } from 'react-router-dom';
import Logo from '../../img/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';
import CartItem from './../CartItem/CartItem';
import ListGroup from 'react-bootstrap/ListGroup';
import CheckoutDisplay from './../../components/CheckoutDisplay/CheckoutDisplay';
import { createStructuredSelector } from "reselect";
import { cartItemsSelector, totalItemsSelector } from '../../redux/selectors/cartSelectors';
import { currentUserSelector } from '../../redux/selectors/userSelectors';

const NavBar = ({ currentUser, cartItems, totalItems, history }) => {

  return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand onClick={() => history.push("/")}>
				<img className="logo" src={Logo} alt="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
						{currentUser ? (
							<div data-test="SignedInLinks">
								<Nav.Link onClick={() => auth.signOut()}>Sign Out</Nav.Link>
								<Nav.Link onClick={() => history.push("/userprofile")}>
									Profile
								</Nav.Link>
							</div>
						) : (
							<div data-test="SignedOutLinks">
								<Nav.Link onClick={() => history.push("/signin")}>
									Sign In
								</Nav.Link>
							</div>
						)}
					<NavDropdown title={`Cart (${totalItems})`} id="cart-dropdown">
						<NavDropdown.Item>
							<ListGroup as="ul">
								{cartItems.length ? (
									cartItems.map((cartItem) => (
										<ListGroup.Item as="li" key={cartItem.id}>
											<CartItem {...cartItem} />
										</ListGroup.Item>
									))
								) : (
									<span className="emptyCart">
										Your cart is currently empty
									</span>
								)}
							</ListGroup>
							<CheckoutDisplay cartItems={cartItems} />
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

NavBar.propTypes = {
	currentUser: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelector,
	cartItems: cartItemsSelector,
	totalItems: totalItemsSelector
})


export { NavBar };
export default withRouter(connect(mapStateToProps)(NavBar));
