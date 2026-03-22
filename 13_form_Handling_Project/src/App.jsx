import React, { useState } from 'react'
import { Plus } from 'lucide-react';


const App = () => {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <div>
      <div className="main flex  ">
        <div className="left p-5 border-r-white ">
          <div className="brand">
            <h1 className='text-white text-xl font-bold'>Dry Pad</h1>
          </div >
          <div onClick={handleShowForm} className="plus text-white flex justify-center mt-22 border p-2 rounded-full bg-grey cursor-pointer">
            <Plus strokeWidth={2.75} />
          </div>
        </div>
        <div className="right p-9  ">
          <div className="heading  ">
            <h1 className='p-15 text-white text-xl'>Notes</h1>
          </div>
          
          {showForm && (
            <div className="notes justify-start">
              <form>
                <input className='px-6 py-3 w-full mt-3 outline-none border-b pb-1 font-bold' type="text" placeholder='Enter Title' />
                <textarea placeholder='Content' className='w-full px-6 py-3 outline-none border-none'></textarea>
                <button type="submit" className='px-4 py-2 bg-blue-500 text-white mt-3 rounded'>Save</button>
                <button type="button" onClick={handleCloseForm} className='px-4 py-2 bg-gray-500 text-white mt-3 ml-2 rounded'>Close</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App