import React from 'react'
import styles from './Feat.module.css'

const Feat = () => {
  return (
    <div><div className="feat_pg">
        <div className={styles.ft_img}>
          <img src="https://plus.unsplash.com/premium_photo-1752140696737-f0df15ed82a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D" alt="" />
          <div className={styles.button}>
            <button className={styles.b1}>View More</button>
            
          </div>
          
        </div>
      </div>

     </div>
  )
}

export default Feat