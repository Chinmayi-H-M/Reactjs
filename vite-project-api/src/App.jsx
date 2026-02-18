import React from 'react'
import UseEffectSlippet from './useEffectSlippet';
//axios can also be used
const App = () => {
  const getData=async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await response.json();

    console.log(data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <UseEffectSlippet />
      
    </div>
  )
}

export default App
