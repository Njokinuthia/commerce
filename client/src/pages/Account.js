import React from 'react'
import Navbar from '../components/Navbar'


const Account = ({user}) => {
  console.log(user)

  return (
    <div>
      <Navbar />
      <div>
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

      <div className='itemslist'>

      </div>
      
      
    </div>
  )
}

export default Account
