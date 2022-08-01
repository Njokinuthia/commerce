import React from 'react'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className='min-h-screen border'>
      <Navbar />
      <div className='border px-6 my-4 py-6 mx-6'>
        <div className='  flex flex-row justify-between'>
          <div>
            <h2 className='text-blackish'>Buy <span className='text-green'>and</span> Sell <br></br> <span className='text-green'>Pre</span>-loved furniture</h2>
            <p>Declutter your space</p>
            <button>Shop Now</button>
          </div>
          <div>
            <img src="" alt="Right Image"></img>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <img src="" alt="Image"></img>
          <img src="" alt="Image"></img>
          <img src="" alt="Image"></img>
        </div>
      </div>
    </div>
  )
}

export default Home
