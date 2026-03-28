import React from 'react'
import {Link} from 'react-router-dom'

const Child_Nav = () => {
  return (
    <div>
      <div className="child_nav flex justify-center gap-8 px-4 py-8">
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>
    </div>
  )
}

export default Child_Nav