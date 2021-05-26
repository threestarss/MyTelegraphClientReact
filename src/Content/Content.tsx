import { RootState } from "../Store/store";
import { useSelector } from "react-redux";

import Article from "./Article/Article";
import Search from "./Search/Search";
import Editor from "./Editor/Editor";

const Content = () => {
  const contentMode = useSelector(
    (state: RootState) => state.appState.contentMode
  );

  return (
    <>
      {contentMode === "article" && <Article />}
      {contentMode === "search" && <Search />}
      {contentMode === "editor" && <Editor />}
    </>
  );
};

export default Content;
