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
  function jump5Num(){
    setnum(num+5);
  }

  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  )
}

export default App
