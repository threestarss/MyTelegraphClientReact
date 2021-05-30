import { RootState } from "../Store/store";
import { useSelector } from "react-redux";
import { Box } from "@material-ui/core";

import Article from "./Article/Article";
import Search from "./Search/Search";
import Editor from "./Editor/Editor";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );

  return (
    <Box maxWidth={732}>
      {contentMode === "article" && <Article />}
      {contentMode === "search" && <Search />}
      {contentMode === "editor" && <Editor />}
    </Box>
  );
};

export default Content;
