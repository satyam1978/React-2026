import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(10)
  const [mode, setmode] = useState('Click to start...')
  function increase(){
    setfirst(first+1)
    setmode('Increasing...')
  }

  function decrease(){
    setfirst(first-1)
    setmode('Decreasing...')
  }

  function reset(){
    setfirst(10)
    setmode('Click to start...')
  }

  
  return (
    <div className='hehe'>
      <h1>Your Count {first}</h1>
      <p>{mode}</p>
      <div className="button">
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App