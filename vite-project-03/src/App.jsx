import React from 'react'
import Profile from './components/profile'

const App = () => {
  return (
    <div className = "parent">
      <Profile user="Chinmayi" age={18}/>// numbers has to be passed using curly braces only
    </div>
  )
}

export default App
