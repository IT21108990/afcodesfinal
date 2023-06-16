import React from 'react'
import  { useState } from 'react'
import { UserContext } from '../context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Userform() {

    const {adduser} = useContext(UserContext)

    const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        const auser = {id,name,sex}
        console.log(auser);
        adduser(auser)
        

       
    }
  return (
    <div>
    <Link to = "/users" >User </Link>
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="id">ID:</label>
      <input
        type="text"
        id="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="sex">Sex:</label>
      <input
        type="text"
        id="sex"
        value={sex}
        onChange={(e) => setSex(e.target.value)}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  </div>
  )
}

export default Userform