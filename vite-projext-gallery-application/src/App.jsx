import React from 'react'

const App = () => {
  const getData =()=>{
    console.log("Data aa gaya");
  }
  return (
    <div className="bg-black text-white p-3">
      <button onClick={getData} className='bg-green-600 active:scale-95 px-5 m-4 py-2 rounded text-white'>Get data</button>
    </div>
  )
}

export default App
