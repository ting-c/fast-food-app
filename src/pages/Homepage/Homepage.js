import React from "react";
import "./Homepage.styles.scss";

import Header from "../../components/Header/Header";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Homepage = ({history}) => (
	<div className="homepage" data-test="HomepageComponent">
		<Header
			className="header"
			data-test="HeaderComponent"
			header="Welcome to Si Señor"
		/>

		<ButtonGroup 
			vertical 
			data-test="ButtonGroupComponent" 
			className="button-group">
			<Button className="signinButton" onClick={() => history.push('/signin')} variant="danger">
				Sign In
			</Button>
			<Button className="menuButton" onClick={() => history.push('/menu')} variant="danger">
				Menu
			</Button>
			<Button className="openingTimesButton" onClick={() => history.push('/openingtimes')} variant="danger">
				Opening Times
			</Button>
		</ButtonGroup>
	</div>
);

export default Homepage
