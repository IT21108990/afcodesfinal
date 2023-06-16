import users from "../data/users";
import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userList, setUserList] = useState(users);

  const getUserById = (id) => {
    return userList.find((user) => user.id === id);
  };

  const addUser = (user) => {
    setUserList([...userList, user]);
  };

  const editUser = (id, user) => {
    setUserList(userList.map((item) => (item.id === id ? user : item)));
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((user) => user.id !== id));
  };

  const value = {
    userList,
    getUserById,
    addUser,
    editUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
