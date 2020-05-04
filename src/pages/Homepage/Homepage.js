import React from "react";
import "./Homepage.styles.scss";
import { Link } from 'react-router-dom';

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Homepage = () => (
		<div className='homepage'>
	
			<Header header="Welcome to Si Señor" />
			<div className="button-group">
				<Link to='/signin'><Button name="Delivery" /></Link>
				<Link to='/menu'><Button name="Menu" /></Link>
				<Link to='/openingtimes'><Button name="Opening Times" /></Link>
			</div>

		</div>
);

export default Homepage
