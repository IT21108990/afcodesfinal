import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

function AddUser() {
  const { userList, addUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: userList.length + 1,
      name,
      email,
      phone,
      borrowedBooks,
    };

    addUser(user);
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label for="email">Email: </label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label for="phone">Phone: </label>
        <br />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />

        <label for="borrowedBooks">Borrowed Books: </label>
        <br />
        <input
          type="Number"
          id="borrowedBooks"
          name="borrowedBooks"
          onChange={(e) => setBorrowedBooks(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddUser;
