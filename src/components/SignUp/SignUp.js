import React from 'react';
import './SignUp.styles.scss';

import { auth, firestore } from "../../firebase/firebase";

class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name : '',
      email : '',
      password : ''
    }
  }

  storeUserDetails = () => {
    const {name, email} = this.state;
    auth.onAuthStateChanged( user => {
      if (user) {
        // user is signed in
        const {uid} = user;
        // create a single document using the uid 
        firestore.collection("users").doc(uid).set({
          name : name,
					email : email
        })
        .catch(error => {
          console.error('error: ', error)
        })
      } else {
        // user is signed out
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    auth.createUserWithEmailAndPassword(email, password)
    .then(this.storeUserDetails)
    .catch(error => {
      alert(`There was an error : ${error.code}`);
      return
    })    

  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value //computed property names
    })
  }

  render(){
    return (
			<div className="SignUp">
				<h2>Sign Up</h2>

				<form onSubmit={this.handleSubmit}>
					<label>Name</label>
					<input
						type="name"
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
						required /> <br/>

					<label>Email</label>
					<input
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required />	<br />

					<label>Password</label>
					<input
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						required />	<br />

					<input type="submit" value="Sign up" />
				</form>
			</div>
		);
  }
}

export default SignUp