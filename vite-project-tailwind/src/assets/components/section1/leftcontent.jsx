import React from 'react'
import { MoveUpRight } from "lucide-react";


const leftcontent = () => {
  return (
    <div className='h-full w-1/3 bg-blue-600 '>
      <div>
         <h3 className='text-6xl font-bold'>Prospective <br/><span>Customer</span><br />Segametation<br /> </h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aspernatur ullam consectetur nostrum modi molestias mollitia cupiditate aliquid impedit deserunt.</p>
      </div>
      <div>
        <MoveUpRight  size={64}/>
      </div>
      
    </div>
  )
}

export default leftcontent
