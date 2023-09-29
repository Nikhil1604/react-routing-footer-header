import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer'>
        {/* useful links */}
        <div className='usefule-link'>
          <h3>Usefule Links</h3>
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
        </div>
        {/*Address  */}
        <div className='address'>
          <h3>Carporate Office</h3>
          <p>Kothrud</p>
          <p>Pune 411038</p>
        </div>

      </div>
    </div>
  )
}

export default Footer