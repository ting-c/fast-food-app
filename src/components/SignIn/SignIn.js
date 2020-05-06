import React from 'react';
import './SignIn.styles.scss';

import { auth, provider, firestore } from '../../firebase/firebase';


class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	storeUserDetails = () => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// user is signed in
				const { uid, displayName, email } = user;
				// create a single document using the uid
				firestore.collection("users").doc(uid).set({
						name: displayName,
						email: email,
					})
					.catch((error) => {
						console.error("error: ", error);
					});
			} else {
				// user is signed out
			}
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const isGoogleSignIn = event.target.value === "Sign in with google";
		if (isGoogleSignIn) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
          this.storeUserDetails();
				})
				.catch((error) => {
					alert(`There is an error with the login: ${error.message}`);
				});
		} else {
			const { email, password } = this.state;
			auth.signInWithEmailAndPassword(email, password)
				.then(console.log('login success'))
				.catch((error) => {
					alert(`There is an error with the login: ${error.message}`);
				})
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

export default SignIn;