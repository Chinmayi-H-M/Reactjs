import React from 'react'

const App = () => {

  let a =20;
  function onclicklis(){
     a=89;
  }
  return (
    <div>
      <h1>Value  os a is {a}.</h1>
      <button onClick={onclickis}>Click</button>
    </div>
  )
}

export default App
