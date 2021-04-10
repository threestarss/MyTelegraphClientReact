import "./style.css";
import { Provider } from "react-redux";

import { store } from "./Store/reducers";
import BookmarkMenu from "./Bookmarks_components/BookmarkMenu";
import MainContainer from "./MainContainer";

function App() {
  return (
      <Provider store={store}>
        <div className="row">
          <MainContainer />
          <BookmarkMenu />
        </div>
      </Provider>
  );
}

export default App;
