import React from 'react';
import Homepage from './Homepage';

import { shallow } from "enzyme";
import { findByTestAttr } from './../../testingUtils';

const setUp = (props={}) => {
  const component = shallow(<Homepage {...props} />);
  return component;
};

describe("Homepage Component", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })
  
  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, 'HomepageComponent');
    expect(wrapper.length).toBe(1);
  });

  it("Should render a header", () => {
    const wrapper = findByTestAttr(component, "HeaderComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a button-group", () => {
    const wrapper = findByTestAttr(component, "ButtonGroupComponent");
    expect(wrapper.length).toBe(1);
  });

});