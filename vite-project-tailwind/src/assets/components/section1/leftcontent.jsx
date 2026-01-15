import React from 'react'
import { MoveUpRight } from "lucide-react";


const leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 bg-blue-600 '>
      <div className="p-4">
         <h3 className='mb-5 text-6xl font-bold leading-[1.1]'>Prospective <br/><span className='text-gray-200'>Customer</span><br />Segametation<br /> </h3>
         <p className='text-xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur ullam consectetur nostrum modi molestias mollitia cupiditate aliquid impedit deserunt.</p>
      </div>
      <div>
        <MoveUpRight  size={64}/>
      </div>
      
    </div>
  )
}

export default leftcontent
