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

//useEffect-api and all it does not effct the main react function and to manage states
//useContext-Slightly complex,global states ko manage karne ke liye without prop drilling
//useReducer- very complex state management ke liye (Redux jaisa chota version)
//useState-change of state
//useMemo-helps in optimization
//useCallback - helps is optimization
//useEffect - side effects handle karne ke liye (jaise API call, DOM manupulation, event listener).
//useref-mutable values hold karne ke liye jo re-render trigger na karein ya DOM access karne ke liye

