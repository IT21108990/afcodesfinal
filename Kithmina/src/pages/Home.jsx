import React from "react";
import { useContext } from "react";
import Navigation from "../components/Navigation";
import { BookContext } from "../context/bookContext";
import { UserContext } from "../context/userContext";

function Home() {
  const { userList } = useContext(UserContext);
  const { bookList } = useContext(BookContext);

  return (
    <div>
      <h2>Users</h2>
      <table border={2}>
        <thead>
          <th>User ID</th>
          <th>User Name</th>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <th>{user.id}</th>
              <th>{user.name}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Books</h2>
      <table border={2}>
        <thead>
          <th>Book ID</th>
          <th>Book Title</th>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <tr key={book.id}>
              <th>{book.id}</th>
              <th>{book.title}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
