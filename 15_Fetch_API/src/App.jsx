import React from 'react'


const App = () => {
  
  const fetching = async () =>{
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(data)
  }
  return (
    <div>
      <button onClick={fetching}>Click here</button>
      
    </div>
  )
}

export default App