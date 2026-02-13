import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
