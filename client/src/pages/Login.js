import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = ({ getUserData }) => {
  let navigate = useNavigate();
  const [logInName, setLogInName] = useState("")
  const [logInPassword, setLogInPassword] = useState("")

  function logIn() {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: logInName,
        password: logInPassword
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        
        getUserData(data)
        // navigate("/account")
      })
  }


  function handleSubmit(event) {
    event.preventDefault()
    logIn()
    navigate("/account")

  }

  function toggleForms() {
    navigate("/signup")
  }

  return (
    <div className='min-h-screen w-full bg-grey'>
      <Navbar />
      <div className='w-6/12 mg-auto flex flex-col mx-20 justify-center mt-8 '>       

        <form onSubmit={handleSubmit} className="">
          <h5 className='text-green mt-4 text-center text-4xl font-bold'>Login</h5>
          <div className='mt-8 '>
            <div className=''>
              <label htmlFor="username">Username:</label>
              <input type="text"
                placeholder="username"
                value={logInName}
                onChange={(e) => setLogInName(e.target.value)}
                required />
            </div>
            <div className=''>
              <label htmlFor="password">Password:</label>
              <input type="password"
                placeholder="Password"
                value={logInPassword}
                onChange={(e) => setLogInPassword(e.target.value)}
                required />
            </div>
          </div>
          <p className='text-center'>Don't have an account?... <span className="text-green font-bold" onClick={toggleForms}>Sign Up</span></p>
          <div className='mt-4 flex justify-center'>
            <button type="submit" className="btn text-white">Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}


export default Login
