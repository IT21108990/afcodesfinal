import React from 'react'

import { UserContext } from '../context'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function User() {

    const {getuser , removeuser} = useContext (UserContext);
    const userarray = getuser()
    const navigate = useNavigate()

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        removeuser(id)
    }



  return (
    <div>
        <h3>User</h3>
        <Link to = "/" >
            home
        </Link>
        <br/>

        <Link to = "/add" >
               add user
        </Link>
        
        <table>
            <thead>
                <th>name</th>
                <th>sex</th>
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            <tbody>
                {userarray.map ((jani) =>(
                    <tr key = {jani.Id}>
                        <td>{jani.name}</td>
                        <td>{jani.sex}</td>
                        <td><button onClick={() => handleEdit(jani.Id)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(jani.Id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
            
        </table>
    </div>
  )
}

export default User