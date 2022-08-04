import React from 'react'
import { useState } from 'react';

const Card = ({ image, price, description, contact, seller }) => {
  const [display, setDisplay] = useState(false)
  function displayContacts(e) {
    e.preventDefault();
    console.log("ok")
    setDisplay(!display)
  }
  return (
    <div className='card bg-white border mx-2 my-2'>
      <div className='relative'>
        <img className="catalogImg" src={image} alt="item" height="50%" width="100%"></img>
        {display ? (<div className='contacts absolute fadeIn-overlay'>
          <p>To purchase please contact seller on email: <span className='text-green font-semibold'>{contact}</span></p>
        </div>): (
          <p></p>
        )}
        
      </div>
      <div className='flex justify-between'>
        <p>{description}</p>
        <p className='text-green font-semibold'>Ksh{price} </p>
      </div>
      <div className='mt-4 flex justify-center'>
        <button className='btn text-white ' onClick={displayContacts}>Seller Information</button>
      </div>
          
    </div >
  )
}

export default Card
