import React from "react";
import "./MenuItem.styles.scss";
import { Link, withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const MenuItem = ({match, title, imageUrl}) => {
  return(
    <Card className='h-100 shadow-sm bg-white rounded' style={{ width: '14rem'}}>
      <Link to={`${match.url}/${title}`}>
        <Card.Img variant="top" src={imageUrl} width='50' height='200'/>
        <Card.Body className='d-flex flex-column'>
          <div className='d-flex mb-2 justify-content-between'>
            <Card.Title className='mb-0 font-weight-bold'>{title}</Card.Title>
          </div>
        </Card.Body>
      </Link>
    </Card>
  )
}

export default withRouter(MenuItem);
