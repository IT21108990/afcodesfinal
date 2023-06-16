import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

function User() {
  const { userList, deleteUser } = useContext(UserContext);

  const handleUpdate = (id) => {};

  const handleDelete = (id) => {
    deleteUser(id);
  };

  return (
    <div>
      <h2>User</h2>
      <Link to="/userAdd">
        <button>Add User</button>
      </Link>
      <table border={2}>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Borrowed Books</th>
          <th>Update</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.borrowedBooks}</td>
              <td>
                <button onClick={() => handleUpdate(user.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
