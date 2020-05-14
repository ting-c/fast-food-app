import React from 'react';
import Item from '../../components/Item/Item';
import items from '../../items-store/foodItems';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const ItemPage = (props) => {
	const itemList = items
		.filter((item) => item.section === props.match.params.menuId)
		.map((item) => {
			return <Item key={item.id} item={item} />;
    });
    
  return (		
			<Container className='ItemPage' data-test='ItemPageComponent'>
				<Row className='justify-content-around align-content-between flex-wrap p-3 m-1'>
					{itemList}
				</Row>
			</Container>		
	)
};

export default ItemPage