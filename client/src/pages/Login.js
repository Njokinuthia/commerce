import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Login = ({getUserData}) => {
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
    <div>
    <Navbar/>
      <form onSubmit={handleSubmit} className="formContainer login">
        <h5 className='green'>Login</h5>
        <div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text"
              placeholder="username"
              value={logInName}
              onChange={(e) => setLogInName(e.target.value)}
              required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password"
              placeholder="Password"
              value={logInPassword}
              onChange={(e) => setLogInPassword(e.target.value)}
              required />
          </div>
        </div>
        <p>Don't have an account?<span className="" onClick={toggleForms}>Sign Up</span></p>
        <button type="submit" className="">Submit</button>
      </form>
    </div>
  )
}


export default Login
