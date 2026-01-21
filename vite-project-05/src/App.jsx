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
  function btnclicked(){
    console.log(num);
    setnum(num+5);
    console.log(num);//inconsole we will get the previous only because setnum runs in asysnchronous manner so console.printts first then the ui gets updated 
  }

  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>

      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
