import React , {createContext , useContext } from "react"
import user from "./assets/user"
import { useState } from "react"

// create a context object to store user daata
export const UserContext = createContext (null)


export const UserProvider = ({ children }) => {


    const [userlist , setUserList] = useState (user);

    const getUserById = (id) => {
        return userlist.find((oneuser) => oneuser.Id === id)
        //fetch api here using fetch await
    
    }

    const getuser = () => {
        return userlist;
    }

    const adduser = (auser) => {
        setUserList([...userlist, auser]);
      };
    
      const removeuser = (id) => {
        setUserList(userlist.filter((auser) => auser.Id !== id));
      };
    
      const edituser = (id, book) => {
        setUserList(userlist.map((item) => (item.Id === id ? book : item)));
      };

    
    const value = {
        getUserById,
        getuser,
        adduser,
        removeuser ,
        edituser
    }



    return (
        <UserContext.Provider value = {value}>
            {children}
        </UserContext.Provider>

    );


}

export default UserProvider;