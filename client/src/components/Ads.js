import React from 'react'

const Ads = ({ id, image, price, description,reload }) => {

  function handleDelete(e) {
    console.log(id)
    e.preventDefault();
    fetch(`/items/${id}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          console.log(res)
          reload(e)
        } else {
          res.json().then(console.log("error"))
        }
      })
  }

  // function handleEdit() {}//
  
  return (
    <div className='flex sm:flex-col md:bg-grey md:flex-row md:justify-around items-center my-6'>
      <div className='w-1/6 my-2'>
        <img src={image} alt="item" height="50%" width="100%"></img>
      </div>
      <p>{description}</p>
      <p className='text-green font-semibold'>Ksh{price} </p>
      <div className='text-white'>
        {/* <button className='btn'>Edit</button> */}
        <button className='btn' onClick={handleDelete}>Remove</button>
      </div>
    </div>
  )
}

export default Ads
