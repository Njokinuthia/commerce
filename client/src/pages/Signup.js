import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Signup = () => {
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
      .then(data => console.table(data))
      // .catch((error) => {
      //   console.log("your error:" + error)
      // })
  }

  function handleSubmit(event) {
    event.preventDefault()
    register()
    // navigate("/shop) navigate to where it was
  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className="">
        <h5 className=''>Sign Up</h5>
        <div>
          <div >
            <input type="email"
              placeholder="Email Address"
              value={signUpEmail}
              onChange={e => setSignUpEmail(e.target.value)}
              required />
          </div>
          <div>
            <input type="text"
              placeholder="Username"
              value={signUpName}
              onChange={e => setSignUpName(e.target.value)} required />
          </div>
          <div>
            <input type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              required />
          </div>
          
        </div>
        <button type="submit" className="">Submit</button>
      </form>

      
      
    </div>
  )
}

export default Signup
