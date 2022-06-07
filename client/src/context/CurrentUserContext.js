import React, { createContext, useState } from "react";

const CurrentUserContext = createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  const user = localStorage.getItem("user");
  const [currentUser, setCurrentUser] = useState(JSON.parse(user));
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
