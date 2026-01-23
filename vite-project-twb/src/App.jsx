
const App = () => {

  const submitHandler = (e) =>{
    e.preventDefault()
    console.log('Form submitted');
  }
  const [Title, setTitle] = useState(second)
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='Enter ur name'
        onChange={(e)=>{
          console.log(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
