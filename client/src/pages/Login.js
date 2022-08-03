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
        // console.log(data)
        getUserData(data)
      })
  }


  function handleSubmit(event) {
    event.preventDefault()
    logIn()
  }

  function toggleForms() {
    navigate("/signup")
  }

  return (
    <>
      <Navbar />
      <div className='mx-20 flex flex-row justify-center mt-12 '>
        {/* <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75fXFG-SBy6_Z6n-UsJkT_YxbORsT688dBQ&usqp=CAU" alt="user"></img> */}

      <form onSubmit={handleSubmit} className="">
        <h5 className='text-green text-center text-4xl font-bold'>Login</h5>
        <div className='mt-8 mb-4'>
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
        <p>Don't have an account?<span className="text-green font-bold" onClick={toggleForms}>Sign Up</span></p>
        <button type="submit" className="shopnow">Submit</button>
        </form>
      </div>
    </>
  )
}


export default Login
