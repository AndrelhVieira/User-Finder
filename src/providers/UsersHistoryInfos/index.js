import { createContext, useState } from "react";

export const UsersHistoryInfosContext = createContext();

export const UsersHistoryInfosProvider = ({ children }) => {
  const [allUsersSearched, setAllUsersSearched] = useState([]);

  const addUserSearch = (currentUser) => {
    setAllUsersSearched([...allUsersSearched, currentUser]);
  };

  return (
    <UsersHistoryInfosContext.Provider
      value={{ allUsersSearched, addUserSearch }}
    >
      {children}
    </UsersHistoryInfosContext.Provider>
  );
};
