import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ link, description, id }) => {
  return (
    <>
      <Link to={`/post/${id}`}>
      <div className="card">
        <div className="icon">
          <img src={link} alt={description} className="img" />
        </div>
        <div className="features">
          <ul>
            <li>{description ? description : "No Description"}</li>
          </ul>
        </div>
      </div>
      </Link>
    </>
  );
};

export default Card;
