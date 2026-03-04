import React from 'react'

const Card = (props) => {
  return (
      <div className="profile">
        <img src={props.imge} alt="" />
        <h2>{props.user}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque.</p>
        <button>{props.button}</button>
      </div>
  )
}

export default Card