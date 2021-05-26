import { Provider } from "react-redux";
import { store } from "./Store/store";

import User from "./User/User";
import Content from "./Content/Content";
import Bookmarks from "./Bookmarks/Bookmarks";

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
