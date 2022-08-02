import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }

  function handleSetUser(resp) {
    console.log(resp)
    setUser(resp)
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
