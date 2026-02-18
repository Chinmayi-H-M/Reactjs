import React from 'react'
import { useState,useEffect } from 'react' 

const UseEffectSlippet = () => {
    const [num, setNum] = useState(0)
    const [num2, setNum2] = useState(100)
    useEffect(function(){
        console.log("Use effect is running");
    },[num])
  return (
    <div>
      <h1>Value of num is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onClick={()=>{
        setNum(num+1)
      }}
      onDoubleClick={()=>{
        setNum2(num2+1);
      }}>Click</button>
    </div>
  )
}

export default UseEffectSlippet
