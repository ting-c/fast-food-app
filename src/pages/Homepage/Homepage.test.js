import React from 'react';
import App from './App';

import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing Homepage component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test('render navbar', () => {
    expect(wrapper.find('div.navbar'));
  });
  test('render button', () => {
    expect(wrapper.find('div.button'));
  });
    
}