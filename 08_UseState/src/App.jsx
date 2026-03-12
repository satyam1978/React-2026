import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(10)
  function speed(){
    setfirst(first+1)
  }

  function result(){
    if(first< 50 ) return "You are too slow";
    if(first>=50 && first<100) return "You are at good speed";
    if(first>=100 && first<150) return "Drive slow";
    if(first>=150) return "You are in danger";
  }
  return (
    <div className='hehe'>
      <h1>Your Speed {first}</h1>
      <p>{result()}</p>
      <button onClick={speed}>Accelerate</button>
    </div>
  )
}

export default App