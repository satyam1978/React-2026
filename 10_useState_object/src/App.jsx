import React, { useState } from 'react'

const App = () => {
  const initialUser = {user:'Satyam', age:23};
  const [first, setfirst] = useState(initialUser)
  const [mode, setmode] = useState('Default')
  
  function u1(){
    const newu = {...first}
    newu.user = 'Aman',
    newu.age = 20
    setfirst(newu)
    console.log(newu)
    setmode('User 1')
  }

  function u2(){
    const newu = {...first}
    newu.user = 'Gaurav',
    newu.age = 22
    setfirst(newu)
    console.log(newu)
    setmode('User 2')
  }

  function reset(){
    setfirst(initialUser)
    setmode('Default')
  }

  
  return (
    <div className='hehe'>
      <h1>Hello! My name is {first.user}, and I'm {first.age} </h1>
      <p>{mode}</p>
      <div className="button">
      <button onClick={u1}>User 1</button>
      <button onClick={u2}>User 2</button>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App