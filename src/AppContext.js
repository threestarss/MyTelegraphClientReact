import { useState, useContext, createContext } from "react";

const AppContext = createContext();
// test
export function AppContextProvider({ children }) {
  const [article, setArticle] = useState();
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResults] = useState({
    query: "",
    serp: [],
  });
  const [scrollPos, setScrollPos] = useState(0);
  const [showError, setShowError] = useState(false);

  return (
    <AppContext.Provider
      value={{
        article,
        bookmarks,
        scrollPos,
        searchResults,
        showError,
        setArticle,
        setBookmarks,
        setScrollPos,
        setSearchResults,
        setShowError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
