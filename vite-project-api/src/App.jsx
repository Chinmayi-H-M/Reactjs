import React from 'react'

const App = () => {
  const getData=async()=>{
    const response =await fetch('https://jsonplaceholder.typicode.com/posts');
    const data =await response.json();

    console.log(data);
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
