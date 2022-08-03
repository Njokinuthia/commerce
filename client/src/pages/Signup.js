import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../components/Navbar'

const Signup = ({getUserData}) => {
  let navigate = useNavigate();
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  const [signUpName, setSignUpName] = useState("")

  function register() {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: signUpName,
        email: signUpEmail,
        password: signUpPassword

      }),
    })
      .then(resp => resp.json())
      .then(data => { 
        // console.log(data)
        getUserData(data)
      })
  }

  function handleSubmit(event) {
    event.preventDefault()
    register()
    
    // navigate("/shop) navigate to where it was    
  }

  function toggleForms() {
    navigate("/login")
  }

  return (
    <div className='min-h-screen w-full bg-grey'>
      <Navbar />
      <div className='w-6/12 mg-auto flex flex-col mx-20 justify-center mt-8'>
        {/* <FontAwesomeIcon icon={['fas', 'faCoffee']} /> */}

        <form onSubmit={handleSubmit} className="">
          <h5 className='flex flex-col text-green text-center text-4xl font-bold mt-4'>Sign Up</h5>
          <div className='mt-8 mb-4'>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text"
                placeholder="Username"
                value={signUpName}
                onChange={e => setSignUpName(e.target.value)} required />
            </div>
            <div >
              <label htmlFor="email">Email:</label>
              <input type="email"
                placeholder="Email Address"
                value={signUpEmail}
                onChange={e => setSignUpEmail(e.target.value)}
                required />
            </div>
            
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password"
                placeholder="Password"
                value={signUpPassword}
                onChange={(e) => setSignUpPassword(e.target.value)}
                required />
            </div>
          </div>

          <p className='text-center'>Already have an account?... <span className="text-green font-bold" onClick={toggleForms}>LogIn</span></p>

          <div className='mt-4 flex justify-center'>
            <button type="submit" className="btn text-white">Submit</button>
          </div>
        </form>

      </div>

    </div>
  )
}

export default Signup
