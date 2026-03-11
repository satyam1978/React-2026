import React from 'react'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.brand}>Sapaya</div>
        <ul>
          <li>Home</li>
          <li>Beauty Products</li>
          <li>Wearing Cloths</li>
          <li>Trending Items</li> 
          <li>Add Cart</li>
          <li>Login</li>
        </ul>
      </div>
      </div>
  )
}

export default Nav