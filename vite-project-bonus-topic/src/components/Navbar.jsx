import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <p>Theme is {props.theme}</p>
      <button>Change theme</button>
    </div>
  )
}

export default Navbar
