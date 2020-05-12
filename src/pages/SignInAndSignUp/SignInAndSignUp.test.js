import React from 'react';
import SignInAndSignUp from './SignInAndSignUp';
import { findByTestAttr } from './../../../testingUtils';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
  const component = shallow(<SignInAndSignUp {...props} />);
  return component;
};

describe('Sign In and Sign Up Page Component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })

  it('should render sign in component', () => {
    const wrapper = findByTestAttr(component, 'signin');
    expect(wrapper.length).toBe(1);
  });

  it('should render sign up component', () => {
    const wrapper = findByTestAttr(component, 'signup');
    expect(wrapper.length).toBe(1);
  });
  
})