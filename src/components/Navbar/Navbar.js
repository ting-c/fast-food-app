import React from 'react';
import './NavBar.styles.scss';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase';
import Logo from '../../img/Logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = ({ currentUser }) => {
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="logo" src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav href="#home">
            { currentUser ? (
              <div>
                <Nav.Link href="#" onClick={() => auth.signOut()}>
                  Sign Out
                </Nav.Link>
              <NavDropdown title="Cart" id="cart-dropdown">
                <NavDropdown.Item href="#">Item</NavDropdown.Item>
              </NavDropdown>
              </div>
                 ) : (
                <Nav.Link href="/signin">
                  Sign In
                </Nav.Link> )
            }
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};


export default connect()(NavBar);
