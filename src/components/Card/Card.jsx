import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ link, description, id, ups, downs, score }) => {
  
  let slicedDesc = "";

  if (description !== null) {
    slicedDesc = description.slice(0, 50);
  }

  return (
    <div className="card-item">
      <Link to={`/post/${id}`} state={{ ups: ups, downs: downs, score: score }}>
        <div className="card-inner">
          <div className="card-top">
            <img src={link} alt={description} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <p>{description ? slicedDesc + "..." : "No Description"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
