import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  return (
    <AppContext.Provider
      value={{
        bookmarks,
        setBookmarks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
