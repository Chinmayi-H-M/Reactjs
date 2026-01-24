import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className="flex justify-between flex-col p-10 gap-4">
        <input type="text" 
        placeholder='Enter task heading' 
        className="px-5 py-2 border border-gray-300 rounded-md"/>
        <input type="text"
        placeholder='Enter details' 
        className='px-5 py-2 h-20 border border-gray-300 rounded-md'/>
        <button className="p-2 bg-blue-500 text-white rounded-md">Add Task</button>
      </form>
    </div>
  )
}

export default App
