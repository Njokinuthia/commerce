import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState()

  function handleSetUser(resp) {
    console.log(resp)
    // setUser(resp)
  }

  return (   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup getUserData={handleSetUser} />}></Route>
        <Route path="/login" element={<Login getUserData={handleSetUser} />}></Route>
      </Routes>        
    </BrowserRouter>
  )   
}

export default App;
