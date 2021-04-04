import "./style.css";
import { Provider } from "react-redux";

import { store } from "./Store/reducers";
import BookmarkMenu from "./Bookmarks_components/BookmarkMenu";
import MainContainer from "./MainContainer";

import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <Provider store={store}>
        <div className="row">
          <MainContainer />
          <BookmarkMenu />
        </div>
      </Provider>
    </AppContextProvider>
  );
}

export default App;
