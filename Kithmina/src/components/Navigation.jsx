import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <div></div>
      <Link to="/user">Users</Link>
      <div></div>
      <Link to="/book">Books</Link>
    </div>
  );
}

export default Navigation;
