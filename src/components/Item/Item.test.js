import React from 'react';
import { findByTestAttr, checkProps } from './../../../testingUtils';
import { shallow } from 'enzyme';
import Item from './Item';

const setUp = (props={}) => {
  const component = shallow(<Item {...props}/>);
  return component;
};

describe('Item Component', () => {

  const expectedProps = {
    name: "Testing Name",
    price: 123,
    imageUrl: "http://testingUrl.com",
  };
  
  describe('Checking Proptypes', () => {
    it('Should not throw a warning', () => {
    
      const propsErr = checkProps(Item, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Have props', () => {
    it('Should render without errors', () => {
      const component = setUp(expectedProps);
      const wrapper = findByTestAttr(component, 'ItemComponent');
      expect(wrapper.length).toBe(1);
    });

  
  });

});


