import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [article, setArticle] = useState();
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResults] = useState({
    query: "",
    serp: [],
  });
  const [scrollPos, setScrollPos] = useState(0);

  return (
    <AppContext.Provider
      value={{
        article,
        bookmarks,
        scrollPos,
        searchResults,
        setArticle,
        setBookmarks,
        setScrollPos,
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
