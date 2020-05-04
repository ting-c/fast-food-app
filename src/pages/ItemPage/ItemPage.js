import React from 'react';
import './ItemPage.style.scss';

import Item from '../../components/Item/Item';
import items from '../../items-store/foodItems';

const ItemPage = (props) => {
	const itemList = items.filter((item) => item.list === props.match.params.menuId)
		.map((item) => {
			const { name, ...otherProps } = item;
			return <Item name={name} {...otherProps} />;
    });
    
  return itemList
};

export default ItemPage