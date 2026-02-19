import React from 'react'
import Navbar2 from './Navbar2'

const Navbar = (props) => {
  return (
    <div className='nav'>
        <h2>My App</h2>
        <Navbar2 theme={props.theme} setTheme={props.setTheme}/>
      
    </div>
  )
}

export default Navbar
