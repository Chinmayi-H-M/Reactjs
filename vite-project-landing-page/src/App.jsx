import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'

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
    <div className="bg-white dark:bg-black  transition-colors duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />

    </div>
  )
}

export default App
