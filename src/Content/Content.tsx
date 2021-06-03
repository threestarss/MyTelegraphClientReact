import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@material-ui/core";
import telegraphAPI from "../TelegraphAPI/telegraphAPI";
import { RootState } from "../Store/store";
import Article from "./Article/Article";
import Search from "./Search/Search";
import Editor from "./Editor/Editor";
import { articleMode } from "../Store/actionCreators";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );
  const dispatch = useDispatch();
  // fetching a test article, don't forget to clean this up.
  useEffect(() => {
    let testArticle = new URL("https://telegra.ph/Poisk-v-telegraph-03-24");
    // TODO: refactor async dispatchers
    dispatch(async (dispatch: any) => {
      let result = await telegraphAPI.getPage(testArticle);
      dispatch(articleMode(result));
    });
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
