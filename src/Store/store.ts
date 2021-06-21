import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Page } from "../TelegraphAPI/apiTypes";
import appStateReducer from "../appStateReducer";
import bookmarksReducer from "../Bookmarks/bookmarksReducer";
import articleReducer from "../Content/Article/articleReducer";
import searchReducer from "../Content/Search/searchReducer";
import userInfoReducer from "../User/userInfoReducer";

export const rootReducer = combineReducers({
  appState: appStateReducer,
  userInfo: userInfoReducer,
  article: articleReducer,
  search: searchReducer,
  bookmarks: bookmarksReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type Bookmark = {
  url: string;
  title: string;
  image_url?: string;
};

export interface RootState {
  appState: {
    contentMode: "article" | "search" | "editor";
    scrollPos: number;
    error: string;
  };
  userInfo: {};
  article: Page;
  search: {};
  bookmarks: Bookmark[] | [];
}

store.subscribe(() =>
  localStorage.setItem("bookmarks", JSON.stringify(store.getState().bookmarks))
);
