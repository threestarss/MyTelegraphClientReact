import { Provider } from "react-redux";
import { store } from "./Store/store";

import User from "./UserComponents/User";
import Content from "./ContentComponents/Content";
import Bookmarks from "./BookmarksComponents/Bookmarks";

export default function App() {
  return (
    <Provider store={store}>
      <User />
      <Content />
      <Bookmarks />
    </Provider>
  );
}
