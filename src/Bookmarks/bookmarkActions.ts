import { bindActionCreators } from "redux";
import { store } from "../Store/store";

export type Bookmark = {
  url: string;
  title: string;
  image_url?: string;
};

export type BookmarksActionType =
  | "ADD_BOOKMARK"
  | "DELETE_BOOKMARK"
  | "LOAD_BOOKMARKS_FROM_LOCAL_STORAGE";
export type BookmarksPayload = Bookmark;
export type BookmarksActionObject = {
  type: BookmarksActionType;
  payload: BookmarksPayload;
};

function add(
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

function remove(
  url: string,
  title: string,
  image_url?: string
): BookmarksActionObject {
  return {
    type: "DELETE_BOOKMARK",
    payload: {
      url: url.toLowerCase(),
      title: title,
      image_url: image_url,
    },
  };
}

function loadFromLocalStorage(
  payload: BookmarksPayload
): BookmarksActionObject {
  return { type: "LOAD_BOOKMARKS_FROM_LOCAL_STORAGE", payload };
}

export const bookmarkActions = bindActionCreators(
  {
    add,
    remove,
    loadFromLocalStorage,
  },
  store.dispatch
);
