import React from 'react';
import Homepage from './Homepage'
import Navbar from '../../components/Navbar/Navbar'
import Button from "../../components/Button/Button";

import {configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
 
configure({ adapter: new Adapter() });

describe("Testing Homepage component", () => {

  test('render Navbar', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.contains(<Navbar/>)).toEqual(true);
  });
  test('render button-group', () => {
    const wrapper = shallow(<Homepage />);
    expect(
			wrapper.containsAllMatchingElements(
        [
          <Button name="Delivery" />,
          <Button name="Menu" />,
          <Button name="Opening Times" />
        ]        
			)
		).toEqual(true);
  });
});