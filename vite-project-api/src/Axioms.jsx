import React from 'react'
import axios from 'axios'
import {useState} from 'react'

const Axioms = () => {
   const [data,setData]=useState([]);
   const getData=async()=>{
     const response = await axios.get('https://picsum.photos/v2/list')
     setData(response.data)
   }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      {data.map((item,idx) => (
        <h1>Hello {idx} {item.author}</h1>
      ))}
    </div>
  )
}

export default Axioms
