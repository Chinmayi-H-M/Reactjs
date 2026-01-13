import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg" alt="" />
          <button>Save<Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part time</h4>
            <h4>Senior level</h4>
          </div>
        </div>
        <hr class="divider"></hr>
        <div className="bottom">
            <div>
                <h3>$120/hr</h3>
                <p>Mumbai,India</p>
            </div>
              <button>Apply now</button>
            
        </div>
      </div>
    </div>
  )
}

export default App
