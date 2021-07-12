import { Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { useContentStyles } from "./useContentStyles";
import Article from "./Article/Article";
import SearchResults from "./SearchResults/SearchResults";
import SearchBar from "../Header/SearchBar";
import Editor from "./Editor/Editor";

const Content = () => {
  const classes = useContentStyles();

  return (
    <Box className={classes.container} maxWidth={732}>
      <SearchBar />
      <Switch>
        <Route exact path="/" component={Editor} />
        <Route path="/search" component={SearchResults} />
        <Route path="/:url" component={Article} />
      </Switch>
    </Box>
  );
};

export default Content;
