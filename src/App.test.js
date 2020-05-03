import React from 'react';
import App from './App';

import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  test('render homepage', () => {
    expect(wrapper.find('div.homepage'));
  });
  
})

