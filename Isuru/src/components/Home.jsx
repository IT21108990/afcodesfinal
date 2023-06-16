import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context'
import Usertable from './usertable'



function Home() {

    const {getuser} =useContext(UserContext);

    const userlist = getuser()




  return (
    <div>
        <h3>Home</h3>                         
        <Link to = "/users" >
        <button >user</button>
        </Link>
        <Usertable userlist2 = {userlist}/>
    </div>

        
  )
}

export default Home