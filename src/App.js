import MainContainer from "./MainContainer";
import BookmarkMenu from "./Bookmarks_components/BookmarkMenu";
import { useState } from "react";
import "./style.css";

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
