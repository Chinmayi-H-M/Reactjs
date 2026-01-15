import React from 'react'
import { MoveRight } from "lucide-react";

const rightcard = () => {
  return (
    <div className='h-full w-80 rounded-xl relative overflow-hidden'>
      <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="absolute top-0 h-full w-full bg-amber-300 flex flex-col justify-between">
          <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center '>
            1
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, mollitia?</p>
          <div>
            <button>Satisfied</button>
            <button><MoveRight /></button>
          </div>
      </div>
    </div>

  )
}

export default rightcard
