import React from "react";
import "./Homepage.styles.scss";

import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

const Homepage = () => (
	<div className='homepage'>
		<Navbar />
		<Header header="Welcome to Si Señor" />

		<div className="button-group">
			<Button name="Delivery" />
			<Button name="Menu" />
			<Button name="Opening Times" />
		</div>

	</div>
);

export default Homepage
