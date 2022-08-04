import React from 'react'

const Ads = ({ image, price, description }) => {
  return (
    <div className='flex justify-around items-center my-6'>
      <div className='w-1/6 my-2'>
        <img src={image} alt="item" height="50%" width="100%"></img>
      </div>
      {/* <img src={image} alt="item" height="50%" width="100%"></img> */}
      <p>{description}</p>
      <p className='text-green font-semibold'>Ksh{price} </p>
      <div className='text-white'>
        <button className='btn'>Edit</button>
        <button className='btn'>Remove</button>
      </div>
      
    </div>
  )
}

export default Ads
