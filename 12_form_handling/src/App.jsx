// import React, { useState } from 'react'

const App = () => {
  //  const [title, setTitle] = useState(" ")
  const submithandler = (e)=>{
    e.preventDefault()
    console.dir(e.target.value)
  }
  return (
    <div className='px-6 m-6'>
      <form onChange={submithandler}>
        <input className=' px-4 py-2 text-white' type="text" placeholder='type something'/>
      </form>
    </div>
  )
}

export default App