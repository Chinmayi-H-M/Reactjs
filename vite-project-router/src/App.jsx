import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'
import About from './pages/about'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes> 
    </div>
  )
}

export default App
