import "./style.css";
// testing
import { useState } from "react";

import BookmarkMenu from "./Bookmarks_components/BookmarkMenu";
import MainContainer from "./MainContainer";

import { AppContextProvider } from "./AppContext";

function App() {
  const appMode = useState(null);

  return (
    <AppContextProvider>
      <div className="row">
        <MainContainer appMode={appMode} />
        <BookmarkMenu appMode={appMode} />
      </div>
    </AppContextProvider>
  );
}

export default App;
