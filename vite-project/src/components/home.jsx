import React from "react";
import { useContext } from "react";
import UserContext from "../context.jsx";

function Home() {
  const { userList } = useContext(UserContext);

  return (
    <>
      <h2>HOME</h2>
      <table border="2">
        <thead>
          <th>user name</th>
          <th>age</th>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Home;
