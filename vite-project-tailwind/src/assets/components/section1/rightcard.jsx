import React from 'react'
import { MoveRight } from "lucide-react";

const rightcard = () => {
  return (
    <div className='h-full w-80 rounded-4xl relative overflow-hidden'>
      <img className='h-full w-full object-cover' src="" alt="" />
      <div className="absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between">
          <h2 className='bg-white m-2 text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center '>
            1
          </h2>
          <p className='text-white  text-xl mt-30'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum autem doloribus vel aut cum earum atque! Iure aperiam dolor quidem!</p>
          <div className='flex justify-between'>
            <button className="bg-blue-600 m-2 text-white font-semibold px-7 py-3 rounded-full text-lg">Satisfied</button>
            <button className="bg-blue-600 m-2 text-white font-semibold px-4 py-3 rounded-full text-lg"><MoveRight /></button>
          </div>
      </div>
    </div>

  )
}

export default rightcard
