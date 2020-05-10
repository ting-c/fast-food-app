import React from 'react';
import './SignIn.styles.scss';

import { auth, firestore } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/userActions';
import { signInWithGoogle } from '../../firebase/firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	storeUserDetails = () => {
		// get the current user by setting an observer on the Auth object
		auth.onAuthStateChanged( user => {
			if (!user) return;
			const { uid, displayName, email } = user;

			const userRef = firestore.collection('users').doc(uid);
			userRef.get().then( user => {
				if (!user.exists) {
					// create a user doc if user doesn't exists
					userRef.set({
						name: displayName,
						email
					});
				}
			})
		})
	};

	
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value, //computed property names
		});
	};

	render() {
		return (
			<Form>
				<Form.Group controlId="signInEmail">
					<Form.Control type="email" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" />
				</Form.Group>

				<Form.Group controlId="signInPassword">
					<Form.Control type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Sign In
  			</Button>
				<Button variant="primary" onClick={signInWithGoogle}>
					Sign In With Google
  			</Button>
			</Form>
		);
	}
}



const mapDispatchToProps = dispatch => (
	{ //action creators
		setCurrentUser: user => dispatch(setCurrentUser(user))
	}
)

export default connect(null, mapDispatchToProps)(SignIn);