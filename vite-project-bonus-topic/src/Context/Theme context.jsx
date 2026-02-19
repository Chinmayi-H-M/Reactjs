import React from 'react'
import {createContext} from 'react'
export const ThemeContext=createContext()

const ThemeContext = () => {
  return (
    <div>
      <ThemeContext.Provider value={props.theme}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContext
