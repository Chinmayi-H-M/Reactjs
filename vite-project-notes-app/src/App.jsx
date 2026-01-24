import React from 'react'

const App = () => {
  return (
    <div>
      <form classname="flex items-center ">
        <input type="text" placeholder='Enter task heading' />
        <textarea placeholder='Enter details' id="details" name='details'/>
      </form>
    </div>
  )
}

export default App
