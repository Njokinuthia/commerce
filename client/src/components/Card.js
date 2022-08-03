import React from 'react'

const Card = ({ image, price, description, contact, seller }) => {
  return (
    <div className=' mx-2 my-2 itemCard'>
      <img src={image} alt="item" height="50%" width="100%"></img>
      
      <p>Ksh{price} </p>
      <p>Description: {description}</p>
      <div className='card'>
        <p className='text-dark'>Call 0700123456 to buy</p>
      </div>
      {/* <button onClick={giveSellerContact} className='text-white sellBtn'>BUY</button> */}
      {/* <NavLink to="/" className='sellBtn'>BUY</NavLink> */}
    </div>
  )
}

export default Card
