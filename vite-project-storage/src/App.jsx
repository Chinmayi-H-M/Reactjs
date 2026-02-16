import React from 'react'

const App = () => {
  localStorage.setItem("name","Chinmayi");
  localStorage.getItem("name");
  localStorage.removeItem("name");
  
  
  const user={
    username:"Chinmayi",
    age:20,
    city:"Bhopal"
  }
  localStorage.setItem("user",JSON.stringify(user));
  const user1=JSON.parse(localStorage.getItem("user"));
  console.log(user1);


  

  return (
    <div>
      App
    </div>
  )
}

export default App

