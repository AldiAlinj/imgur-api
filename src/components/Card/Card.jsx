import React from 'react'
import './card.scss'
const Card = ({title, link}) => {
  return (
    <>
<div className="card">

  <div className="title">{title}</div>

  <div className="icon">
    <img src={link} alt={title} className='img' />
  </div>
  <div className="features">
    <ul>
      <li><span>5</span> Edits</li>
      <li><span>1GB</span> Storage</li>
      <li><span>3</span> Pages</li>
      <li><span>1</span> Hour free support</li>
    </ul>
  </div>
  {/* <a href="#" className="btn">Check it out</a> */}

</div>



</>
  )
}

export default Card