import React from 'react'

const input = () => {

    function inputChange(elem){
        console.log(elem.target.value);
    }
  return (
    <div>
      <input onChange={inputChange} type="text" placeholder="Enter your name" />
      or
      <input onChange={function(elem){
        inputChange(elem.target.value)
        // if we didnt't write in abover function elem thn we can do likew this
      }} type="text" placeholder="Enter your name" />

      <div onMouseMove={(elem)=>{
        console.log(elem.clientY);
      }} className="box">
        onwheel
        //delthaX nad deltaY for speed of mouse scroll

      </div>
    </div>
  )
}

export default input
