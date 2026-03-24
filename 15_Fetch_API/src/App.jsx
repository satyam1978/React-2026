import React, { useState } from 'react'


const App = () => {
  const [data,setdata] = useState([])
  const fetching = async () =>{
  const data =  await fetch('https://dummyjson.com/users');
  const result = await data.json();
  setdata(result.users)
  console.log(result.users)
  }
  return (
    <div>
      <button onClick={fetching}>Click here</button>
      <div className="msg">
        {data.map((e,idx) => {
          return(
            <p>{idx} {e.firstName} {e.lastName} </p>
          )
        })}
      </div>
    </div>
  )
}

export default App