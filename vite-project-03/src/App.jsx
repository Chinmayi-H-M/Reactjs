import React from 'react'
import Profile from './components/profile'

const App = () => {
  return (
    <div className = "parent">
      <Profile user="Chinmayi" age={18} img='https://images.unsplash.com/photo-1767041573027-f77c33df6b7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      {/* numbers has to be passed using curly braces only */}
      <Profile user="Harshitha" age={18} img='https://plus.unsplash.com/premium_photo-1753982281905-1b21bca9682e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
