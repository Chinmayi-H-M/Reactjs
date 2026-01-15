import React from 'react'
import Navbar from './navbar.jsx'
import PageContent from './pagecontent.jsx'

const section1 = (props) => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <PageContent users={props.users} />
    </div>
  )
}

export default section1
