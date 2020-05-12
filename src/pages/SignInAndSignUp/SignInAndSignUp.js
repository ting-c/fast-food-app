import React from "react";
import './SignInAndSignUp.styles.scss';

import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const SignInAndSignUp = () => (
    <Tabs className='signInAndSignUp'>
      <Tab eventKey="signin" title="Sign In">
        <SignIn data-test='signin'/>
      </Tab>
      <Tab eventKey="signup" title="Sign Up">
        <SignUp data-test='signup'/>
      </Tab>
    </Tabs>
    
    
)

export default SignInAndSignUp