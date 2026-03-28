import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="nav flex justify-between align-center px-6 py-6 bg-blue-400">
        <h2 className='text-2xl font-bold'>Funami</h2>
        <div className="link flex gap-6">
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/course'>Course</Link>
          <Link to='/product'>Product</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar