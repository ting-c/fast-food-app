import React from "react";
import "./MenuItem.styles.scss";

const MenuItem = ({title, imageUrl}) => {
  return(
    <div 
      style={
        { backgroundImage: `url(${imageUrl})` }
      }
      className='MenuItem'>
      <div className="content">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  )
}

export default MenuItem;
