import React from 'react'
import Child_Nav from '../components/Child_Nav'
import { Outlet } from 'react-router'

const Product = () => {
  
  return (
    <div>
      <Child_Nav />
      
      <Outlet/>
    </div>
    
  )
}

export default Product