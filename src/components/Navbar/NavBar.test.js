import React from "react";
import { NavBar } from "./NavBar";
import { checkProps, findByTestAttr } from "./../../../testingUtils";
import { shallow } from "enzyme";

const setUp = (props = {}) => {
	const component = shallow(<NavBar {...props} />);
	return component;
};

describe('Navbar Component', () => {

  const expectedProps = { 
    currentUser: {
      name: 'Testing'
    }
  };

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {
      const propsErr = checkProps(NavBar, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have Props', () => {

    let component;
    beforeEach(() => {
      component = setUp(expectedProps);
    });

    it('Should render signed in links when user has signed in', () => {
      const wrapper = findByTestAttr(component, 'SignedInLinks');
      expect(wrapper.length).toBe(1);
    });

    it('Should NOT render signed out links when user has signed in', () => {
      const wrapper = findByTestAttr(component, 'SignedOutLinks');
      expect(wrapper.length).toBe(0);
    });
  });

  describe('Have NO Props', () => {

    let component;
    beforeEach(() => {
      component = setUp();
    });

    it('Should render signed out links when user has signed out', () => {
      const wrapper = findByTestAttr(component, 'SignedOutLinks');
      expect(wrapper.length).toBe(1);
    });
    it('Should NOT render signed in links when user has signed out', () => {
      const wrapper = findByTestAttr(component, 'SignedInLinks');
      expect(wrapper.length).toBe(0);
    });
  });


})