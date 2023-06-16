import React from 'react'
import { UserContext } from '../context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function EditUser() {


    const {edituser} = useContext(UserContext)

    const { id } = useParams();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');

  console.log(id);

    const handleSubmit = (e) => {
        e.preventDefault()

        const auser = {id,name,sex}
        console.log(auser);
        edituser(id,auser)
       
    }


  return (
    <div>
    <Link to = "/users" >User </Link>
    <form onSubmit={handleSubmit}>

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
    <button type="submit">Edit</button>
  </form>
  </div>
  )
}

export default EditUser