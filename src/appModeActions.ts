import { bindActionCreators } from "redux";
import { store } from "./Store/store";
import { ArticleActionObject } from "./Store/actionTypes";
import { SearchActionObject } from "./Store/actionTypes";

function setArticleMode(): ArticleActionObject {
  return { type: "ARTICLE_MODE" };
}

function setSearchMode(): SearchActionObject {
  return { type: "SEARCH_MODE" };
}

function setEditorMode() {
  return { type: "EDITOR_MODE" };
}

export const appModeActions = bindActionCreators(
  {
    setArticleMode,
    setSearchMode,
    setEditorMode,
  },
  store.dispatch
);
