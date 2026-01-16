import React from 'react'
import RightCard from './rightcard.jsx'

const rightcontent = (props) => {
  return (
    <div className='h-full w-2/3 flex overflow-x-auto flex-nowrap bg-blue-600 p-10 gap-10'>
        {props.users.map(function(){
          return <RightCard/>
        })}
    </div>
  )
}

export default rightcontent
