import React from 'react'

const Card = (props) => {
  return (
     <div className="bg">
        <img src={props.image} alt="" />
        <div className="details">
          <h2>{props.name}</h2>
          <h5>{props.description}</h5>
          <div className="about">
            <div className='first'>
              <h3>⭐ {props.rating} <span> |</span></h3>
              <p>Rating</p>
            </div>

            <div className='mid'>
              <h3>${props.earned}</h3>
              <p>Earned</p>
            </div>

            <div className='last'>
              <h3><span> | </span>${props.rate}</h3>
              <p>Rate</p>
            </div>
          </div>

          <div className="button">
            <button className='b1'><span>&#9993;</span> Get In Touch</button>
            <button className='b2'>&#128278;</button>
          </div>
        </div>
      </div>
  )
}

export default Card