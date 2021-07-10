import { createContext, useState } from "react";

export const UsersHistoryInfosContext = createContext();

export const UsersHistoryInfosProvider = ({ children }) => {
  const [allUsersSearched, setAllUsersSearched] = useState([]);

  const addUserSearch = (currentUser) => {
    setAllUsersSearched([...allUsersSearched, currentUser]);
  };

  const removeUserSearch = (allUsersUpdated) => {
    setAllUsersSearched(allUsersUpdated);
  };

  return (
    <UsersHistoryInfosContext.Provider
      value={{ allUsersSearched, addUserSearch, removeUserSearch }}
    >
      {children}
    </UsersHistoryInfosContext.Provider>
  );
};
