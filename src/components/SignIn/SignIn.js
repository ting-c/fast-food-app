import React from 'react';
import './SignIn.styles.scss';

import { auth } from '../../firebase/firebase';
import { signInWithGoogle } from '../../firebase/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignIn extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			})
		} catch (error) {
			console.log(error);
		}
		
	}
	
	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value, //computed property names
		});
	};

	render() {
		return (
			<Form>
				<Form.Group controlId="signInEmail">
					<Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email address" />
				</Form.Group>

				<Form.Group controlId="signInPassword">
					<Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={this.handleSubmit}>
					Sign In
  			</Button>
				<Button variant="primary" onClick={signInWithGoogle}>
					Sign In With Google
  			</Button>
			</Form>
		);
	}
}


export default SignIn;