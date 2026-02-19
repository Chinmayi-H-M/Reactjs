import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
