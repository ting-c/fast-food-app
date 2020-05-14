import React from "react";
import "./MenuItem.styles.scss";
import { Link, withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const MenuItem = ({match, title, imageUrl}) => {
  return (
		<Card
			className="MenuItem h-100 shadow-sm bg-white rounded"
			style={{ width: "14rem" }}
			data-test="MenuItemComponent"
		>
			<Link to={`${match.url}/${title}`} className='MenuItemLink' data-test="MenuItemLink">
				<Card.Img
					variant="top"
					src={imageUrl}
					width="50"
					height="200"
					data-test="MenuItemImage"
				/>
				<Card.Body className="Body d-flex flex-column" data-test="MenuItemBody">
						<Card.Title	className="Title"	data-test="MenuItemTitle" >
							{title}
						</Card.Title>				
				</Card.Body>
			</Link>
		</Card>
	);
}

MenuItem.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export { MenuItem };
export default withRouter(MenuItem);
