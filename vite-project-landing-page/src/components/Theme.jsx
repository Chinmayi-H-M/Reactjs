import React, { useEffect } from 'react'
import assets from '../assets/assets'

const Theme = ({theme,setTheme}) => {
    
    
  return (
    <>
      <button onClick={()=>setTheme(theme==='dark' ? 'light' : 'dark')}>
        {theme==="dark" ? (
            <img src={assets.sun_icon} 
            className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
        ) : (
            <img src={assets.moon_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full "alt=""/>
        )}
      </button>
    </>
  )
}

export default Theme
