import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import { BookmarksPayload, BookmarksActionObject } from "../Store/actionTypes";

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
