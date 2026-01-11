import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {
  const user = "Chinmayi"
  const age= 20
  return (
    <div classname="parent">
      <Navbar/>
      <Card />
    </div>
  )
}

export default App
