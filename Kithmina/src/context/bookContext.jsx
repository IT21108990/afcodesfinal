import books from "../data/books";
import { createContext, useState } from "react";

export const BookContext = createContext(null);

export const BookContextProvider = ({ children }) => {
  const [bookList, setBookList] = useState(books);

  const getBookById = (id) => {
    return bookList.find((book) => book.id === id);
  };

  const addBook = (book) => {
    setBookList(...[bookList, book]);
  };

  const editBook = (id, book) => {
    setBookList(bookList.map((item) => (item.id === id ? book : item)));
  };

  const deleteBook = (id) => {
    setBookList(bookList.find((book) => book.id !== id));
  };

  const value = {
    bookList,
    getBookById,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export default BookContextProvider;
