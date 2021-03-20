import MainContainer from "./MainContainer";
import BookmarkMenu from "./Bookmarks_components/BookmarkMenu";
import { useState } from "react";
import "./style.css";

import ArticleContext from "./ArticleContext";
import BookmarksContext from "./BookmarksContext";
import SearchContext from "./SearchContext";

function App() {
  const [article, setArticle] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResults] = useState({
    query: "",
    serp: [],
  });
  const appMode = useState(null);

  return (
    <ArticleContext.Provider value={{ article, setArticle }}>
      <BookmarksContext.Provider value={{ bookmarks, setBookmarks }}>
        <SearchContext.Provider value={{ searchResults, setSearchResults }}>
          <div className="row">
            <MainContainer appMode={appMode} />
            <BookmarkMenu appMode={appMode} bookmarks={bookmarks} />
          </div>
        </SearchContext.Provider>
      </BookmarksContext.Provider>
    </ArticleContext.Provider>
  );
}

export default App;
