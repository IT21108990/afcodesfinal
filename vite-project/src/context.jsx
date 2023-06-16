import { createContext, useState } from "react";
import User from "./data/usersdata.jsx";

export const UserContext = createContext(null)

export const UserProvider = ({ children }) => {
    const [userlist, setUserList] = useState(User)
    const getUserById = (id) => {
        return userlist.find((oneuser) => oneuser.Id === id);
      };
    
      const getuser = () => {
        return userlist;
      };
    
      const adduser = (auser) => {
        setUserList([...userlist, auser]);
      };
    
      const removeuser = (id) => {
        setUserList(userlist.filter((book) => book.id !== id));
      };
    
      const edituser = (id, book) => {
        setUserList(userlist.map((item) => (item.id === id ? book : item)));
      };
    
      const value = {
        getUserById,
        getuser,
        adduser,
        removeuser,
        edituser,
      };
    
      return <UserContext.Provider value={value}>{ children }</UserContext.Provider>;
    };
    
    export default UserProvider;