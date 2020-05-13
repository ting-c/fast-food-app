import React from 'react';
import Item from '../../components/Item/Item';
import items from '../../items-store/foodItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemPage = (props) => {
	const itemList = items
		.filter((item) => item.section === props.match.params.menuId)
		.map((item) => {
			const { name, ...otherProps } = item;
			return <Item name={name} key={name} {...otherProps} />;
    });
    
  return (
		<div className='ItemPage' data-test='ItemPageComponent'>
			<Container className='m-3'>
				<Row className='justify-content-around align-content-between flex-wrap p-3 m-1'>
					{itemList}
				</Row>
			</Container>
		</div>
	)
};

export default ItemPage