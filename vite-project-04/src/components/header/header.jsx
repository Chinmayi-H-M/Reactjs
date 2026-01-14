import React from 'react'
import styles from './header.module.css'
const header = () => {
  return (
    <div className={styles.header}> 
        <h3>Sheryians</h3>
        <button className='btn'>Login</button>
    
      
    </div>
  )
}

export default header
