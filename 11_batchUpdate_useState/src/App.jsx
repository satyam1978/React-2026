import React, { useState } from 'react'

const App = () => {
  const [first, setfirst] = useState(10)
  const [mode, setmode] = useState('Click to update...')
  function increase(){
    setfirst(prev=>(prev+1))
    setfirst(prev=>(prev+1))
    setfirst(prev=>(prev+1))
    setmode('Increasing by 3')
  }

  function decrease(){
    setfirst(prev=>(prev-1))
    setfirst(prev=>(prev-1))
    setfirst(prev=>(prev-1))
    setmode('Decreasing by 3')
  }

  function reset(){
    setfirst(10)
    setmode('Click to update...')
  }

  
  return (
    <div className='hehe'>
      <h1>Your Batch is Updating by {first}</h1>
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