import React from 'react'
import LeftContent from './leftcontent.jsx'
import RightContent from './rightcontent.jsx'

const pagecontent = () => {
  return (
    <div className='py-3 flex items-center gap-10 h-[90vh] bg-gray px-18'>
        <LeftContent/>
        <RightContent/>
      
    </div>
  )
}

export default pagecontent
