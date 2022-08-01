import React from 'react'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='flex flex-row'>
        <div>
          <h2>Buy <span>and</span> Sell <br></br> <span>Pre</span>-loved furniture</h2>
          <p>Declutter your space</p>
          <button>Shop Now</button>
        </div>
        <div>Right Image</div>
      </div>
      
    </div>
  )
}

export default Home
