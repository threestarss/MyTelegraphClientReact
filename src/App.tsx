import { Provider } from "react-redux";
import { store } from "./Store/store";
import { ThemeProvider } from "@material-ui/core/styles";
import { Container, CssBaseline } from "@material-ui/core";
import User from "./User/User";
import Content from "./Content/Content";
import Bookmarks from "./Bookmarks/Bookmarks";
import { theme } from "./theme";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container fixed maxWidth="sm">
          <User />
          <Content />
          <Bookmarks />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
