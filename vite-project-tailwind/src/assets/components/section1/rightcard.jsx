import React from 'react'
import { MoveRight } from "lucide-react";
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className='h-full w-80 rounded-4xl relative overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent tag={props.tag}/>
    </div>

  )
}

export default RightCard
