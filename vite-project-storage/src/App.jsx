import React from 'react'

const App = () => {
  localStorage.setItem("name","Chinmayi");
  localStorage.getItem("name");

  return (
    <div>
      App
    </div>
  )
}

export default App

