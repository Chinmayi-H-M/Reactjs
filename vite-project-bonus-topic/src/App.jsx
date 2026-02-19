import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [Theme, setTheme] = useState('light')
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar theme={Theme}/>
    </div>
  )
}

export default App
