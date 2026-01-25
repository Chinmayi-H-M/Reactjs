import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className="flex items-start justify-between p-10 gap-4">
        <div className='flex flex-col p-5 items-start gap-4'>
          <input type="text"
            placeholder='Enter task heading'
            className="px-5 py-2 border border-gray-300  outline-none rounded-md" />
          <textarea type="text"
            placeholder='Enter details'
            className='px-5 py-2 h-20 border border-gray-300 outline-none rounded-md' />
          <button className="p-2 bg-blue-500 text-white rounded-md">Add Task</button>
        </div>
        <img className="h-60" src="https://pngimg.com/uploads/notebook/notebook_PNG19227.png" alt="" />
      </form>
    </div>
  )
}

export default App
