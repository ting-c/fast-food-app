import React from 'react';
import './NavBar.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import Logo from '../../img/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import PropTypes from 'prop-types';
import CartItem from './../CartItem/CartItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { cartItemsSelector, totalItemsSelector } from '../../redux/selectors/cartSelectors';
import { currentUserSelector } from '../../redux/selectors/userSelectors';

const NavBar = ({ currentUser, cartItems, totalItems }) => {

  return (
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="/">
				<img className="logo" src={Logo} alt="logo" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav href="#home">
						{currentUser ? (
							<div data-test="SignedInLinks">
								<Nav.Link href="#" onClick={() => auth.signOut()}>
									Sign Out
								</Nav.Link>
								<Nav.Link href="/userprofile">Profile</Nav.Link>
								<NavDropdown title={`Cart (${totalItems})`} id="cart-dropdown">
									<NavDropdown.Item>
											<ListGroup as="ul">
												{ cartItems.length ? cartItems.map( cartItem => (
														<ListGroup.Item as="li" key={cartItem.id}>
															<CartItem {...cartItem} />
														</ListGroup.Item>
												)) : <span className='emptyCart'>Your cart is currently empty</span>}
											</ListGroup>
									</NavDropdown.Item>
									<NavDropdown.Item>
										{ cartItems.length ? <Button variant="success">Checkout</Button>
												: null }
									</NavDropdown.Item>
								</NavDropdown>
							</div>
						) : (
							<div data-test="SignedOutLinks">
								<Nav.Link href="/signin">Sign In</Nav.Link>
							</div>
						)}
					</Nav>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

NavBar.propTypes = {
	currentUser: PropTypes.object
};

const mapStateToProps = state => ({
  currentUser: currentUserSelector(state),
	cartItems: cartItemsSelector(state),
	totalItems: totalItemsSelector(state)
})


export { NavBar };
export default connect(mapStateToProps)(NavBar);
