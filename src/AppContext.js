import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [article, setArticle] = useState();
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResults] = useState({
    query: "",
    serp: [],
  });

  return (
    <AppContext.Provider
      value={{
        article,
        bookmarks,
        searchResults,
        setArticle,
        setBookmarks,
        setSearchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
