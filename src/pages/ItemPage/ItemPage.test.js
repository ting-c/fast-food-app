import React from "react";
import { ItemPage } from "./ItemPage";

import { shallow } from "enzyme";
import { findByTestAttr } from "./../../testingUtils";

const setUp = (props = {}) => {
	const component = shallow(<ItemPage {...props} />);
	return component;
};

describe("Item Page Component", () => {

  const expectedProps = {
    match : {
      params: {
        url: 'testing.com'
      } 
		},
		foodItems: ['item_1', 'item_2']
  }

	let component;
	beforeEach(() => {
		component = setUp(expectedProps);
	});

	it("Should render without errors", () => {
		const wrapper = findByTestAttr(component, "ItemPageComponent");
		expect(wrapper.length).toBe(1);
	});
});
