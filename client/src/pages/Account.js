import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Ads from '../components/Ads'


const Account = ({ user }) => {
  let adCard=[]
  if (user!= null) {
    adCard = user.items?.map(item =>
    <Ads
      key={item.id}
      image={item.image_url}
      description={item.description}
      condition={item.condition}
      price={item.price}
    />
  )
  }

  return (
    <div className='min-h-screen bg-grey'>
      <Navbar />
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <div className='flex flex-col'>
            <h2>Personal Details</h2>
            <div>
              <p className='text-green'>Username:</p>
              <h4>{user.username}</h4>
            </div>
            <div>
              <p className='text-green'>Email Address:</p>
              <h4>{user.email}</h4>
            </div>
          </div>
          <div className=''>{adCard}</div>
        </div>
      ) : (
        <p>Log in</p>
      )}
    </div>
  )
}

export default Account
