import "./App.jsx";
import React, { useState } from "react";
import Home from "./pages/Home";
import Book from "./pages/Book";
import User from "./pages/User";
import AddUser from "./components/AddUser.jsx";
import BookDetails from "./pages/BookDetails";
import UserDetails from "./pages/UserDetails";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserContextProvider from "./context/userContext";
import BookContextProvider from "./context/bookContext";

function App() {
  return (
    <UserContextProvider>
      <BookContextProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/book" element={<Book />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/book/:id" element={<BookDetails />}></Route>
            <Route path="/user/:id" element={<UserDetails />}></Route>
            <Route path="/userAdd" element={<AddUser />}></Route>
          </Routes>
        </BrowserRouter>
      </BookContextProvider>
    </UserContextProvider>
  );
}

export default App;
