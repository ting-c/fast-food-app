/* eslint-disable react/forbid-foreign-prop-types */

import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../testingUtils';
import Header from './Header';


const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Header Component', () => {

  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
      };

      const propsErr = checkProps(Header, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = {
				header: "Test Header",
			};
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeaderComponent");
      expect(wrapper.length).toBe(1);
    });
  })

});

