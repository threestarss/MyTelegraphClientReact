import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { RootState } from "../Store/store";
import { useContentStyles } from "./useContentStyles";
import Article from "./Article/Article";
import SearchResults from "./SearchResults/SearchResults";
import SearchBar from "../Header/SearchBar";
import Editor from "./Editor/Editor";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );
  const classes = useContentStyles();

  return (
    <Box className={classes.container} maxWidth={732}>
      <SearchBar />
      {contentMode === "article" && <Article />}
      {contentMode === "search" && <SearchResults />}
      {contentMode === "editor" && <Editor />}
    </Box>
  );
};

export default Content;
