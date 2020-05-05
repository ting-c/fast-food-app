import React from 'react';
import './ItemPage.styles.scss';

import Item from '../../components/Item/Item';
import items from '../../items-store/foodItems';

const ItemPage = (props) => {
	const itemList = items
		.filter((item) => item.section === props.match.params.menuId)
		.map((item) => {
			const { name, ...otherProps } = item;
			return <Item name={name} {...otherProps} />;
    });
    
  return (
		<div className="ItemPage">
			{itemList}
		</div>
	)
};

export default ItemPage