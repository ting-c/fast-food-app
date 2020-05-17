import React from 'react';
import './ItemPage.styles.scss';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {foodItemsSelector} from "../../redux/selectors/foodItemsSelector";
import Item from '../../components/Item/Item';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const ItemPage = ({foodItems, match, history}) => {
	const itemList = foodItems[match.params.menuId]
		.map((item) => {
			return <Item key={item.id} item={item} />;
    });
    
  return (		
			<Container className='ItemPage' data-test='ItemPageComponent'>
				<Row className='menu-row'><Button className='backToMenu' onClick={() => history.push('/menu')}>
						Menu
				</Button></Row>
				<Row className='Row'>
					{itemList}
				</Row>
			</Container>		
	)
};

const mapStateToProps = createStructuredSelector({
	foodItems : foodItemsSelector
});

export default withRouter(connect(mapStateToProps)(ItemPage));