import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";
import { RootState } from "../Store/store";
import { useContentStyles } from "./useContentStyles";
import Article from "./Article/Article";
import Search from "./Search/Search";
import Editor from "./Editor/Editor";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );
  const classes = useContentStyles();

  return (
    <Box className={classes.container} maxWidth={732}>
      {contentMode === "article" && <Article />}
      {contentMode === "search" && <Search />}
      {contentMode === "editor" && <Editor />}
    </Box>
  );
};

export default Content;
