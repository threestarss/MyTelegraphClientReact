import MainContainer from "./MainContainer";
import BookmarkMenu from "./BookmarkMenu";
import { useState } from "react";
import "./style.css";
import SearchContext from "./SearchContext";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      <div className="row">
        <MainContainer />
        <BookmarkMenu />
      </div>
    </SearchContext.Provider>
  );
}

export default App;
