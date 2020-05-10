import React from 'react';
import './SignUp.styles.scss';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth, createUserProfileDoc } from '../../firebase/firebase';

class SignUp extends React.Component {
  constructor(){
    super();

    this.state = {
      name : '',
      email : '',
      password : '',
      confirmPassword: ''
    }
  } 

  handleSubmit = async event => {
    event.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match, please enter the same passwords");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // pass in name from state as user object from auth.createUser.. doesn't have name property
      await createUserProfileDoc(user, { name });

      // reset form
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name] : value 
    });
  }

  render(){
    const { name, email, password, confirmPassword } = this.state;
    return (
      <Form className='signup'>
        <Form.Group controlId="signUpName">
          <Form.Control type="name" name="name" onChange={this.handleChange} value={name} placeholder="Full Name" />
        </Form.Group>

        <Form.Group controlId="signUpEmail">
          <Form.Control type="email" name="email" onChange={this.handleChange} value={email} placeholder="Email address" />
        </Form.Group>

        <Form.Group controlId="signUpPassword">
          <Form.Control type="password" name="password" onChange={this.handleChange} value={password} placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Control type="password" name="confirmPassword" onChange={this.handleChange} value={confirmPassword} placeholder="Confirm Password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Sign Up
  			</Button>

      </Form>
		);
  }
}

export default SignUp