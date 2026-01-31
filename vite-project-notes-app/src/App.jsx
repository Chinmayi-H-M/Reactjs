import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [tasks, setTasks] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Task added successfully!");
    console.log("Ur task added successfully");
    const copyTasks = [...tasks];
    copyTasks.push({ title, details });
    setTasks(copyTasks);
    setTitle("");
    setDetails("");
  }

  const deleteNote=(idx)=>{
    console.log("Note deleted successfully");
    const copyTasks = [...tasks];
    copyTasks.splice(idx,1);
    setTasks(copyTasks);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }

      } className="flex flex-col items-start lg:w-1/2 p-10 gap-4">
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <div className='flex flex-col p-5 items-start gap-4'>
          <input type="text"
            placeholder='Enter task heading'
            className="w-full px-5 py-2 border border-gray-300  outline-none rounded-md"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea type="text"
            placeholder='Enter details'
            className='w-full px-5 py-2 h-20 border border-gray-300 outline-none rounded-md'
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button className="p-2 active:bg-gray-400 bg-blue-500 text-white rounded-md">Add Task</button>
        </div>

      </form>
      <div className="lg:w-1/2 lg:border-l-2 bg-gray-900 p-10">
        <h1 className="text-2xl font-bold">Recent Tasks</h1>
        <div className='flex flex-wrap items-start gap-4  justify-start mt-5 overflow-auto h-[90%]'>
          {tasks.map(function (task, idx) {
            return <div key={idx} className="h-52 w-44 rounded-2xl text-black bg-white py-10 px-3 flex flex-col justify-between bg-[url('https://cdn.pixabay.com/photo/2017/03/18/17/46/notepad-2154581_640.png')] bg-cover bg-center ">
              <div>
                <h2 className="font-bold">{task.title}</h2>
                <p className='mt-2 leading-tight font-medium text-gray-500 line-clamp-4'>{task.details}</p>
              </div>
                <button onClick={()=>{
                  deleteNote(idx)}} 
                  className="w-full p-2 mt-3 active:bg-gray-400 active:scale-95 rounded-md font-bold bg-red-500 text-white">Delete Note</button>
              </div>
           })}
            </div>
      </div>
      </div>
      )
}

      export default App
