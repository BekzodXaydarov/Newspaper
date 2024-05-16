import React from "react";
import "./Card.css";

const Card = ({ img, title, description, url, index }) => {
  return (
    <div className="card" key={index}>
      <div className="card_head">
        <img src={img} alt="" />
      </div>
      <div className="card_body">
        <h3>{title.slice(0, 50)}</h3>
        <p>{description?.slice(0, 190)}</p>
      </div>
      <a href={url}>Read More</a>
    </div>
  );
};

export default Card;
