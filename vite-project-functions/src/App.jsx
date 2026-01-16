import React from 'react'
import Input from './input.jsx'

const App = () => {

  function btnClicked(){
    console.log("Button is clicked");
  }
  return (
    <div>
      <h1>Heelo. Chinmayi</h1>
      {/* mouse entered  */}
      <button onclick={btnClicked}>Change user</button>
      <button onclick={function(){
         console.log("button is clicked");

      }}>Click here</button>
      <button onClick={()=>{
        console.log("Clicked from arrow function");
      }}>Click here arrow function</button>
      <Input/>
    </div>
    
  )
}

export default App
