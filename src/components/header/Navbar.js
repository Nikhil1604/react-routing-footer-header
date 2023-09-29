import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        {/* start of navbar */}
        <div className='nav'>
            <div className='nav-title'>Just <span>DoIt</span></div>
            <div className='nav-link'>
                <span><Link className='link' to='/'>Home</Link></span>
                <span><Link className='link' to='/contact'>Contact</Link></span>
                <span><Link className='link' to='/about'>About</Link></span>
            </div>

        </div>
    </>
  )
}

export default Navbar