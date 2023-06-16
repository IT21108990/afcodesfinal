import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home'
import User from "./components/user";
import Nav from './components/nav'
import './App.css'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Nav/>
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        <Route path = "/user" element={<User/>} ></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
