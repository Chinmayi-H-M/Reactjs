import React, { useState } from 'react'

const App = () => {

  const [a,setA] = useState(20)
  const [name, setname] = useState("Chinmayi")
  function onclickis(){
    setA(8);
    setname("CS");
  }
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num+1);
  }
  function decreaseNum(){
    setnum(num-1);
  }

  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  )
}

export default App
