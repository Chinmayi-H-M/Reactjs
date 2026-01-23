const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted');
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter ur name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}
