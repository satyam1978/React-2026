import React from 'react'

const App = () => {
  return (
    <div className='text-white '>
      <div className="navbar flex justify-between items-center p-6 ri-letter-spacing-2">
        <ul className="flex justify-between items-center gap-16">
          <li>
            <h5 className="brand me-8 font-bold ">PLAY <span className='ml-2 me-2 bg-blue-500 px-1'>NFT</span></h5>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Artists</a></li>
          <li><a href="#">News</a></li>
        </ul>

        <div className="button flex gap-10 me-8">
          <a href="#" className=' b1 '>Search</a>
          <a href="#" className=' b2 '>Register</a>
        </div>
      </div>

      <div className="main_row mt-2 flex mb-4">
        <div className="left  w-4/2 h-screen p-10 ri-align-center">
          <div className="row p-8 flex-wrap">
            <div className="col_1 w-2/3">
              <h2 className='text-7xl my-4'>Discover, Collect and Sell Dope Arts and NFTs</h2>
              <p className='text-2xl mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum.</p>
            </div>
            <div className="col_2 my-6 gap-2 flex justify-between w-2/4">
              <a href="" className='px-4 py-2  discover'>Discover</a>
              <a href="" className='border-blue-500 px-4 py-2'>Create</a>
              <a href="" className='px-4 py-2 underline text-red-500'>Watch a video</a>
            </div>
            <div className="col_3 w-2/4 p-4 flex justify-between">
              <div className="first">
                <span className='text-4xl'>27K+</span>
                <p>Art Works</p>
              </div>
              <div className="second">
                <span className='text-4xl'>20k+</span>
                <p>Auctions</p>
              </div>
              <div className="third">
                <span className='text-4xl'>7K+</span>
                <p>Artists</p>
              </div>
            </div>
            <div className="col_4 flex justify-between w-2/4 mt-6 p-2 gap-3">
              <div className="img flex">
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="m1" />
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="m2" />
              <img src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="m3" />
              <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmx8ZW58MHx8MHx8fDA%3D" alt="m4" />
              </div>
              <div className="third">
                <span className='text-4xl'>40 K+</span>
                <p>Active Users</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right  w-4/3 p-18">
        <div className="main_img  ml-6 ">
          <img src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D" alt="main_img" />
          <div className="txt bg-amber-800 h-30 flex justify-around p-4 opacity-70">
            <div className="second">
                <span className='text-gray-300'>Ending In:</span>
                <p className='mb-3'>1h 20min 30 sec</p>
                <a href="" className='px-6 py-2 bg-blue-500'>Place a bit</a>
              </div>
              <div className="third">
                <span className='text-gray-300'>Highest Bid</span>
                <p className='mb-3 pl-2' >32.4 ETH</p>
                <a href="" className='px-4 py-2 bg-blue-300 '>Purchase</a>
              </div>
              </div>
       </div>
        </div>
      </div>

      <div className="banner flex justify-around h-20 bg-blue-900 p-6 w-full mb-10">
        <h4>Coinbase</h4>
        <h4>Binance</h4>
        <h4>Revolt</h4>
        <h4>NITFINEX</h4>
        <h4>BLACKCHAIN</h4>
        <h4>Crypto</h4>
      </div>
    </div>
  )
}

export default App