import { bindActionCreators } from "redux";
import { store } from "./store";
import { BookmarksPayload, BookmarksActionObject } from "./actionTypes";
import { ArticleActionObject } from "./actionTypes";
import { SearchActionObject } from "./actionTypes";
import { UserInfoActionPayload, UserInfoActionObject } from "./actionTypes";
import telegraphAPI from "../TelegraphAPI/telegraphAPI";
import googleSearchAPI from "../GoogleSearchAPI/googleSearchAPI";
import { Page } from "../TelegraphAPI/apiTypes";
import { SearchResult } from "../GoogleSearchAPI/apiTypes";

function addBookmark(
  url: string,
  title: string,
  image_url?: string
): BookmarksActionObject {
  return {
    type: "ADD_BOOKMARK",
    payload: {
      url: url.toLowerCase(),
      title: title,
      image_url: image_url,
    },
  };
}

function deleteBookmark(
  url: string,
  title: string,
  image_url?: string
): BookmarksActionObject {
  return {
    type: "DELETE_BOOKMARK",
    payload: {
      url: url,
      title: title,
      image_url: image_url,
    },
  };
}

function loadBookmarksFromLocalStorage(
  payload: BookmarksPayload
): BookmarksActionObject {
  return { type: "LOAD_BOOKMARKS_FROM_LOCAL_STORAGE", payload };
}

function setArticleMode(): ArticleActionObject {
  return { type: "ARTICLE_MODE" };
}

function setSearchMode(): SearchActionObject {
  return { type: "SEARCH_MODE" };
}

function setEditorMode() {
  return { type: "EDITOR_MODE" };
}

// TODO: type this properly
function fetchArticle(this: any, url: string) {
  return async () => {
    try {
      const result = await telegraphAPI.getPage(new URL(url));
      this.setArticleContent(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function setArticleContent(article: Page) {
  return { type: "ARTICLE_CONTENT_LOADED", payload: article };
}

function fetchSearch(this: any, query: string) {
  return async () => {
    try {
      const result = await googleSearchAPI.search(query);
      this.setSearchResult(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function setSearchResult(serp: SearchResult) {
  return { type: "SERP_LOADED", payload: serp };
}

function setError(error: Error) {
  console.log(error);
}

function userLogin(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: "LOGIN", payload };
}

function userLogout(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: "LOGOUT", payload };
}

function setScrollPos(payload: number) {
  return { type: "SET_SCROLL_POS", payload };
}

export const appModeActions = bindActionCreators(
  {
    setArticleMode,
    setSearchMode,
    setEditorMode,
  },
  store.dispatch
);

export const articleActions = bindActionCreators(
  {
    fetchArticle,
    setArticleContent,
    setError,
  },
  store.dispatch
);

export const searchActions = bindActionCreators(
  {
    fetchSearch,
    setSearchResult,
    setError,
  },
  store.dispatch
);

export const bookmarkActions = bindActionCreators(
  {
    add: addBookmark,
    delete: deleteBookmark,
    loadFromLocalStorage: loadBookmarksFromLocalStorage,
  },
  store.dispatch
);

export const userActions = bindActionCreators({}, store.dispatch);
