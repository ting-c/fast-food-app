import React from 'react';
import Homepage from './Homepage';

import { shallow } from "enzyme";

const setUp = (props={}) => {
  const component = shallow(<Homepage {...props} />);
  return component;
}

describe("Homepage component", () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })
  
  it("Should render without errors", () => {
    const wrapper = component.find(`[data-test='HomepageComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it("Should render a header", () => {
    const wrapper = component.find(`[data-test='HeaderComponent']`);
    expect(wrapper.length).toBe(1);
  });

  it("Should render a button-group", () => {
    const wrapper = component.find(`[data-test='ButtonGroupComponent']`);
    expect(wrapper.length).toBe(1);
  });

});