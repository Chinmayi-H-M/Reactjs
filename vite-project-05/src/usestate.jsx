import React from 'react'

const usestate = () => {
    const [num, setnum] = useState({user:'Chinmayi',age:20})
    const [arr, setarr] = useState([10,20,30])

    const btnClicked=()=>{
        const newNum={...num};//Destructuring
        newNum.user='sharan'

        setnum(newNum)

    }
    const btnClicked1=()=>{
        const newarr={...arr};//Destructuring
        newarr.push(99)

        setnum(newarr)

    }
    
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onclick={btnClicked}>Click</button>
      <h1>{arr}</h1>
      <button onclick={btnClicked1}>Click</button>
    </div>
  )
}

export default usestate
