import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Signup from './pages/Signup';




function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
        
    </BrowserRouter>
  )   
}

export default App;
