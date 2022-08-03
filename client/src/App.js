import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Adpage from './pages/Adpage';
import Catalog from './pages/Catalog';
import Account from './pages/Account';

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => {
          console.log("welcome back"+ user.username)
          setUser(user)
        });
        // console.log(user);
      } else {
        console.log("please log in");
      }
    });    
  }, []);


  
  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login onLogin={setUser} />;
  // }

  // if (user) {
  //   console.log("welcome" + user.username);
  // } else {
  //   console.log("please log in");
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
        <Route path="/adpage" element={<Adpage user={user} />}></Route>
        <Route path="/catalog" element={<Catalog/>}></Route>
        <Route path="/account" element={<Account user={user} />}></Route>
      </Routes>        
    </BrowserRouter>
  )   
}

export default App;
