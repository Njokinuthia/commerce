import React from 'react'

const Ads = ({ image, price, description }) => {
  return (
    <div className='flex justify-around w-full'>
      <img src={image} alt="item" height="50%" width="100%"></img>
      <p>{description}</p>
      <p className='text-green font-semibold'>Ksh{price} </p>
      <button>update</button>
      <button>delete</button>

    </div>
  )
}

export default Ads
