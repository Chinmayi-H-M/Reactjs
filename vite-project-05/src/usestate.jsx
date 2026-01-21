import React from 'react'

const usestate = () => {
    const [num, setnum] = useState({user:'Chinmayi',age:20})

    const btnClicked=()=>{
        const newNum={...num};//Destructuring
        newNum.user='sharan'

        setnum(newNum)

    }
  return (
    <div>
      
    </div>
  )
}

export default usestate
