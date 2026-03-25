
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    response()
  }, [index])

  const response = async () => {
    const url = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    const result = await url.json()
    setdata(result)
  }



  const prev = () => {
    if (index > 1) {
      setIndex(index - 1)
    }
  }

  const next = () => {

    setIndex(index + 1)

  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-8 py-12'>
      <div className='max-w-7xl mx-auto'>

        <div className='mb-12'>
          <h1 className='text-4xl font-bold text-white mb-2'>Photo Gallery</h1>
          <p className='text-gray-400'>Discover beautiful images</p>
        </div>




        <div className="button flex justify-center mb-8 gap-8">
          <button onClick={prev} style={{opacity:index==1?0.5:1}} disabled={index===1}
            className='bg-yellow-500 px-6 py-4 text-white font-semibold hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl rounded-lg cursor-pointer'>Prev</button>
          <h5 className=' px-2 py-4 text-white font-semibold hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl rounded-lg '>{index}</h5>
          <button onClick={next}
            className='bg-yellow-500 px-6 py-4 text-white font-semibold hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl rounded-lg cursor-pointer'>Next</button>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((e, idx) => {
            return (
              <div
                key={idx}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >

                <div className='relative overflow-hidden h-48 bg-gray-700'>
                  <img
                    src={e.download_url}
                    alt={`Gallery ${idx}`}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>


                <div className='p-4'>
                  <p className='text-gray-300 text-sm mb-2'>#{e.id}</p>
                  <p className='text-white font-semibold truncate'>{e.author}</p>
                  <p className='text-gray-500 text-xs mt-2'>Photo by {e.photographer}</p>
                </div>
              </div>
            )
          })}
        </div>


        {data.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500 text-lg'>Click "Load Photos" to see the gallery</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App