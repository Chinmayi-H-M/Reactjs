import React from 'react'
import { MoveRight } from "lucide-react";


const RightCardContent = (props) => {
  return (
  
      <div className="absolute top-0 left-0 h-full w-full  p-5 flex flex-col justify-between">
          <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center '>
             {props.id+1}
          </h2>
          <div>
          <p className='text-white  text-sm mt-30'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem doloribus vel aut cum earum atque! Iure aperiam dolor quidem!</p>
          <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className="m-2 text-white font-semibold px-7 py-3 rounded-full text-lg">Satisfied</button>
            <button className="bg-blue-600 m-2 text-white font-semibold px-4 py-3 rounded-full text-lg"><MoveRight /></button>
          </div>
      </div>
    </div>

  )
}

export default RightCardContent
