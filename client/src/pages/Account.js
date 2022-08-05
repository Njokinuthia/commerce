import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Ads from '../components/Ads'
import Login from './Login'


const Account = ({ user }) => {
  // const [items, setItems] = useState()
  let navigate = useNavigate()
  let adCard = [] 

  function reload(e) {
    e.preventDefault()
    window.location.reload(false);
  }
  
 
  if (user != null) {
    adCard = user.items?.map(item =>
      <Ads
        key={item.id}
        id={item.id}
        image={item.image_url}
        description={item.description}
        condition={item.condition}
        price={item.price}
        reload={reload}
      />
    )
  }

  function handleOnClick(e) {
    e.preventDefault();
    navigate("/adpage")
  }

  return (
    <div className='min-h-screen bg-grey'>
      <Navbar />
      {user ? (
        <div className='items-centerflex flex-col flex-wrap'>
          <p className='text-center'>Welcome <span className='text-green '>{user.username} </span></p>
          <div className='md:flex'>
            <div className='md:ml-12 sm:pl-6 md:pl-12 md:w-1/4 flex flex-col'>          
              <h2 className='text-green text-4xl font-semibold my-4'>Profile</h2>

              <h2 className='text-green text-2xl font-semibold mb-2'>Personal Details:</h2>
              <div>
                <p className='text-green text-xl font-semibold'>Username:</p>
                <h4 className='text-l mb-2 font-semibold'>{user.username}</h4>
              </div>
              <div>
                <p className='text-green text-xl font-semibold'>Email Address:</p>
                <h4 className='text-l mb-8 font-semibold'>{user.email}</h4>
              </div>
              <button onClick={handleOnClick} className='font-bold my-8 shopnow text-green btn text-white px-2'>Post Ad</button>
            </div>            
            <div className='md:flex sm:flex md:flex-col md:w-3/4'>{adCard}</div>
            {/* <div className='mt-12 w-5/6 h-5/6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>{adCard}</div> */}

          </div>
        </div>     

      ) : (<Login/>)}
    </div>
  )
}

export default Account
