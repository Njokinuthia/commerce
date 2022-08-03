import React from 'react'

const Card = ({ image, price, description, contact, seller }) => {
  return (
    <div className='card bg-white border mx-2 my-2'>
      <img src={image} alt="item" height="50%" width="100%"></img>


      <div className='flex justify-between'>
        <p>{description}</p>
        <p className='text-green font-semibold'>Ksh{price} </p>
      </div>


      <div className='mt-4 flex justify-center'>
        <button className='btn text-white '>Seller Information</button>
        {/* <p className='text-dark'>Call 0700123456 to buy</p> */}
      </div>
      {/* <button onClick={giveSellerContact} className='text-white sellBtn'>BUY</button> */}
      {/* <NavLink to="/" className='sellBtn'>BUY</NavLink> */}
    </div >
  )
}

export default Card
