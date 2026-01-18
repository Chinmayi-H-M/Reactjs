import React, { useState } from 'react'

const App = () => {

  const [a,setA] = useState(20)
  function onclickis(){
    setA(8);
  }
  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>
    </div>
  )
}

export default App
