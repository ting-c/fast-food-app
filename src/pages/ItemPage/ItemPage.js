import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {foodItemsSelector} from "../../redux/selectors/foodItemsSelector";
import Item from '../../components/Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const ItemPage = ({foodItems, match}) => {
	const itemList = foodItems
		.filter((item) => item.section === match.params.menuId)
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

const mapStateToProps = createStructuredSelector({
	foodItems : foodItemsSelector
});

export default connect(mapStateToProps)(ItemPage);