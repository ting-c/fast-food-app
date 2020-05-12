import React from 'react';
import { MenuItem } from './MenuItem';
import { checkProps, findByTestAttr } from './../../../testingUtils';
import { shallow } from 'enzyme';

const setUp = (props={}) => {
  const component = shallow(<MenuItem {...props} />);
  return component;
};

describe('Menu Item Component', () => {
  const expectedProps = {
    match: {
      url: 'http://testingUrl.com'
    },
    title: 'Testing title',
    imageUrl: 'http://testingUrl.com'
  };

  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
    const propsErr = checkProps(MenuItem, expectedProps);
    expect(propsErr).toBeUndefined();
    });
  });

  describe('Have Props', () => {

    let component;
    beforeEach(() => {
      component = setUp(expectedProps);
    });

    it('Should render without errors', () => {
      const wrapper = findByTestAttr(component, 'MenuItemComponent');
      expect(wrapper.length).toBe(1);
    });
    it('Should render item link', () => {
      const wrapper = findByTestAttr(component, 'MenuItemLink');
      expect(wrapper.length).toBe(1);
    });
    it('Should render item image', () => {
      const wrapper = findByTestAttr(component, 'MenuItemImage');
      expect(wrapper.length).toBe(1);
    });
    it('Should render item body', () => {
      const wrapper = findByTestAttr(component, 'MenuItemBody');
      expect(wrapper.length).toBe(1);
    });
    it('Should render item title', () => {
      const wrapper = findByTestAttr(component, 'MenuItemTitle');
      expect(wrapper.length).toBe(1);
    });
  });

});
