import React from 'react'
import RightCard from './rightcard.jsx'

const rightcontent = () => {
  return (
    <div className='h-full w-3/4 flex overflow-x-auto flex-nowrap bg-blue-600 p-10 gap-10'>
      <RightCard/>
      <RightCard/>
      <RightCard/>
    </div>
  )
}

export default rightcontent
