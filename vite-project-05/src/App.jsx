import React, { useState } from 'react'

const App = () => {

  const [a,setA] = useState(20)
  const [name, setname] = useState("Chinmayi")
  function onclickis(){
    setA(8);
    setname("CS");
  }
  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>
    </div>
  )
}

export default App
