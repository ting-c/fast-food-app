import React from 'react';
import './SignIn.styles.scss';

import { auth, provider, firestore } from '../../firebase/firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/userActions';

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

	handleSubmit = (event, props) => {
		event.preventDefault();
		const isGoogleSignIn = event.target.value === "Sign in with google";
		if (isGoogleSignIn) {
			auth
				.signInWithPopup(provider)
				.catch((error) => {
					alert(`There is an error with the login: ${error.message}`);
				})
				.then(() => {
					this.storeUserDetails();
				})
				.then(this.props.setCurrentUser(auth.currentUser));
		} else {
			const { email, password } = this.state;
			auth
				.signInWithEmailAndPassword(email, password)
				.catch((error) => {
					alert(`There is an error with the login: ${error.message}`);
				})
				.then(this.props.setCurrentUser(auth.currentUser))
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value, //computed property names
		});
	};

	render() {
		return (
			<div className="SignIn">
				<h2>Sign In</h2>

				<form onSubmit={this.handleSubmit}>
					<label>Email</label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<br />
					<label>Password</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<br />
					<input type="submit" value="Sign in" />
					<br />
					<input
						onClick={this.handleSubmit}
						defaultValue="Sign in with google"
					/>
				</form>
			</div>
		);
	}
}



const mapDispatchToProps = dispatch => (
	{ //action creators
		setCurrentUser: user => dispatch(setCurrentUser(user))
	}
)

export default connect(null, mapDispatchToProps)(SignIn);