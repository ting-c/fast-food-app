import React from "react";
import "./Homepage.styles.scss";

import Header from "../../components/Header/Header";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Homepage = () => (
		<div className='homepage'>
			<Header header="Welcome to Si Señor" />

			<ButtonGroup vertical className='button-group'>
			<Button className='button' href='signin' variant="danger">Delivery</Button>
			<Button className='button' href='menu' variant="danger">Menu</Button>
			<Button className='button' href='openingtimes' variant="danger">Opening Times</Button>
			</ButtonGroup>
		</div>
);

export default Homepage
