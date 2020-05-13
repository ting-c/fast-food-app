import React from "react";
import MenuPage from "./MenuPage";

import { shallow } from "enzyme";
import { findByTestAttr } from "../../../testingUtils";

const setUp = (props = {}) => {
	const component = shallow(<MenuPage {...props} />);
	return component;
};

describe("Menu Page Component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it("Should render without errors", () => {
		const wrapper = findByTestAttr(component, "MenuPageComponent");
		expect(wrapper.length).toBe(1);
	});
});
