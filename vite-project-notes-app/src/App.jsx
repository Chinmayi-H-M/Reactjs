import React from 'react'

const App = () => {
  const submitHandler=(e)=>{
    e.preventDefault();
    alert("Task added successfully!");
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
    <form onSubmit={(e)=>{
        submitHandler(e);
      }
    }className="flex items-start lg:w-1/2 p-10 gap-4">
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
      <div className="flex lg:w-1/2 gap-20 bg-gray-900 flex-wrap p-10">
        <h1 className="text-2xl font-bold">Your Tasks</h1>
        <div className="h-32 w-32 rounded-2xl bg-white"></div>
      </div>
    </div>
  )
}

export default App
