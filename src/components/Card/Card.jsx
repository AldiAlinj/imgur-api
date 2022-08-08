import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";

const Card = ({ data, index }) => {
  
  // Slicing the description string if it is too large
  let slicedDesc = "";
  if (data.description !== null) {
    slicedDesc = data.description.slice(0, 50);
  }

  return (
    <div className="card-item" >
      <Link to={`/post/${data.id}`} state={{ image: data }}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.link} alt={data.description} />
          </div>
          <div className="card-bottom">
            <div className="card-info" data-testid={`card-${index}`}>
              <p>{data.description ? slicedDesc + "..." : "No Description"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
