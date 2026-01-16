import React from 'react'
import LeftContent from './leftcontent.jsx'
import RightContent from './rightcontent.jsx'

const PageContent = (props) => {
  return (
    <div className='pb-20 pt-10 flex items-center gap-10 h-[90vh] bg-gray px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default PageContent
