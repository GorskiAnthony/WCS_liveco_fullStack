import React, { createContext, useState } from "react";
import { getItem } from "../services/localStorage";

const CurrentUserContext = createContext(null);

export const CurrentUserContextProvider = ({ children }) => {
  const user = getItem("currentUser");
  const [currentUser, setCurrentUser] = useState(user);

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserContext;
