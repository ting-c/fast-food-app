import React from "react";
import { ItemPage } from "./ItemPage";

import { shallow } from "enzyme";
import { findByTestAttr } from "./../../testingUtils";

describe("Item Page Component", () => {

  

	let component;
	beforeEach(() => {

		const item_1 = {
			id: 1
		}

		const expectedProps = {
				match : {
					params: {
						menuId: 1
					} 
				},
				foodItems : {
					'item_1': {},
					'item_2': {}
				}
		};

		component = shallow(<ItemPage {...expectedProps} />);

	});

	it("Should render without errors", () => {
		const wrapper = findByTestAttr(component, "ItemPageComponent");
		expect(wrapper.length).toBe(1);
	});
});
