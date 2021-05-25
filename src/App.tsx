import { Provider } from "react-redux";
import { store } from "./Store/store";

import User from "./UserComponents/User";
import Content from "./ContentComponents/Content";
import Bookmarks from "./BookmarksComponents/Bookmarks";

const App = () => {
  return (
    <Provider store={store}>
      <User />
      <Content />
      <Bookmarks />
    </Provider>
  );
};

export default App;
