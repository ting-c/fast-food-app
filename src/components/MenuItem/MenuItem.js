import React from "react";
import "./MenuItem.styles.scss";
import { Link } from "react-router-dom";

const MenuItem = ({title, imageUrl, match}) => {
  return(
    <Link to={`${match.url}/${title}`}>
    <div className='MenuItem'>
      <div 
        className='background-image'
        style={
          { backgroundImage: `url(${imageUrl})` }
        }
      />
        <div className="content">
          <h1 className="title">{title}</h1>
        </div>
    </div>
    </Link>
  )
}

export default MenuItem;
