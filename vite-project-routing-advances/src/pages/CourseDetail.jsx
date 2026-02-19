import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
  const params = useParams()
  return (
    <div>
      <h2>Course Detail Page</h2>
      <p>Course ID: {params.id}</p>
    </div>
  )
}

export default CourseDetail
