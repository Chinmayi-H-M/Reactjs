import { useState } from "react"

const App = () => {
  const [Title, setTitle] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted by',Title);

    setTitle('')
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter ur name'
        value={Title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default App
