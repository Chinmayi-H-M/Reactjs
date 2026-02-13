import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar'


const App = () => {
  const[theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  useEffect(()=>{
        if(theme==='dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])
  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">

      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
