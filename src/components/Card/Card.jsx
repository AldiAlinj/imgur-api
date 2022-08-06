import React from "react";
import "./card.scss";
import { Link } from "react-router-dom";
const Card = ({ link, description, id }) => {

let slicedDesc = ''

  if(description !== null) {
   slicedDesc = description.slice(0, 50)
  }



  return (
    <>
      {/* <Link to={`/post/${id}`}>
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
      </Link> */}


      <div className="card-item">
      <Link to={`/post/${id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={link} alt={description} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <p>{description ? slicedDesc + '...' : "No Description"}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>



    </>
  );
};

export default Card;
