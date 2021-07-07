import { createContext, useState } from "react";

export const CurrentUserInfosContext = createContext();

export const CurrentUserInfosProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserInfosContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserInfosContext.Provider>
  );
};
