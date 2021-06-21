import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import { RootState } from "../Store/store";
import Article from "./Article/Article";
import Search from "./Search/Search";
import Editor from "./Editor/Editor";
import { articleActions } from "../Store/actionCreators";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );
  // fetching a test article, don't forget to clean this up.
  useEffect(() => {
    articleActions.fetchArticle("https://telegra.ph/Poisk-v-telegraph-03-24");
  }, []);

  return (
    <Box maxWidth={732}>
      {contentMode === "article" && <Article />}
      {contentMode === "search" && <Search />}
      {contentMode === "editor" && <Editor />}
    </Box>
  );
};

export default Content;
