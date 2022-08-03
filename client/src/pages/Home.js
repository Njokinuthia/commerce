import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'


const Home = () => {
  let navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault()   
    navigate("/catalog")
  }

  return (
    <div className='min-h-screen border '>
      <Navbar />
      <div className='px-10 my-4  mx-12'>
        <div className=' flex flex-row justify-between'>
          <div>
            <h2 className='mt-10 mb-8 text-5xl text-blackish'>Buy <span className='text-green'>and</span> Sell</h2>
            <h2 className="my-4 text-5xl text-blackish"> Pre<span className='text-green'>-loved furniture</span></h2>
            <p className='text-xl my-2'>Declutter your space</p>
            <button onClick={handleOnClick} className='font-bold my-8 shopnow text-green'>Shop Now</button>
          </div>
          <div className="mt-10 mb-12">
            <img className="h-80 pr-12" src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/furniture-icon.png" alt="Right"></img>
          </div>
        </div>
        <div className=' pb-8 flex flex-row justify-between height h-64'>         
          <img src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="Image" width="30%" ></img>
         
          <img src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Image" width="30%"></img>
          <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Image" width="30%"></img>
        </div>
      </div>
    </div>
  )
}

export default Home
