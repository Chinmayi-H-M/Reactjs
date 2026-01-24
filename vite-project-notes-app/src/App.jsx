import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className="flex justify-between flex-col p-10">
        <input type="text" 
        placeholder='Enter task heading' 
        className="p-2 border border-gray-300 rounded-md"/>
        <input type="text"
        placeholder='Enter details' 
        className='p-2 border border-gray-300 rounded-md'/>
      </form>
    </div>
  )
}

export default App
