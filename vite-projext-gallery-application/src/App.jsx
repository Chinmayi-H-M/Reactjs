import React from 'react'
import axios from 'axios';
import {useState,useEffect} from 'react'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const getData = async()=>{
    
    const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }
  useEffect(function(){
    getData();
  },[index])

  // let printUserData="No userVAvailable"
  let printUserData=<h1 className='text-gray-400 text-xs absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Loading </h1>
  if(userData.length > 0){
    printUserData = userData.map(function(item){
      return <div key={item.id}>
      <a href={item.url} target="_blank">
      <div className="h-40 w-44 bg-white overflow-hidden" key={item.id} ><img className="h-full object-cover" src={item.download_url} alt={item.author} /></div>
      <h2 className="text-white font-bold">{item.author}</h2>
      </a>
      </div>
      
    })
  }

  return (
    <div className="bg-black text-white p-3 overflow-auto ">
      {/* <button onClick={getData} className='bg-green-600 active:scale-95 px-5 m-4 py-2 rounded text-white'>Get data</button> */}

      <div>
        {printUserData}
      </div>
      <div className="flex justify-center gap-10 mt-5 items-center p-4">
        <button style={{opacity: index==1 ?0.5 : 1}} onClick={()=>{
          if(index>1){
          setIndex(index-1);}
        }}className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Prev</button>
        <h4>Page {index}</h4>
        <button onClick={()=>{
          setIndex(index+1);
        }} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded">Next</button>

      </div>
    </div>
  )
}

export default App
