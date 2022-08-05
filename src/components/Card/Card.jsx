import React from 'react'
import './card.scss'
const Card = ({ link, description}) => {
  return (
    <>
<div className="card">


  <div className="icon">
    <img src={link} alt={description} className='img' />
  </div>
  <div className="features">
    <ul>
      <li>{description ? description : 'No Description'}</li>
    </ul>
  </div>
  {/* <a href="#" className="btn">Check it out</a> */}

</div>



</>
  )
}

export default Card