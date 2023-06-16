import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import UserProvider from './context'
import Userform from './components/userform'
import EditUser from './components/EditUser'


function App() {
  const [count, setCount] = useState(0)

  return (

    <UserProvider>
    <BrowserRouter>

    <Routes>
      <Route path = "/" element= {<Home/>} > </Route>
      <Route path = "/users" element = {<User/>}> </Route>
      <Route path = "/add" element = {<Userform/>}> </Route>
      <Route path = "/edit/:id" element = {<EditUser/>}></Route>
    </Routes>
  
    </BrowserRouter>

    </UserProvider>
  )
}

export default App
