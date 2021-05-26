import { Provider } from "react-redux";
import { store } from "./Store/store";

// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "./theme";

import User from "./User/User";
import Content from "./Content/Content";
import Bookmarks from "./Bookmarks/Bookmarks";

const App = () => {
  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <User />
      <Content />
      <Bookmarks />
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default App;
