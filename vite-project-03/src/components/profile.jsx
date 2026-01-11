import React from 'react'

const profile = (props) => {
  return (
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci harum quis, hic accusamus non nulla cumque impedit vel sint?</p>
        <button>View Profile</button>
      </div>
  )
}

export default profile
