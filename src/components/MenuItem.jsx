import React from "react";

const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img className="img" src={img} alt={title} />
      <div className="item-info">
        <div className="header">
          <h5>{title}</h5>
          <span className="item-price">{price}</span>
        </div>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};

export default MenuItem;
