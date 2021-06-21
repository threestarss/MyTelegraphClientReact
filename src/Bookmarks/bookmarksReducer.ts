import { BookmarksActionObject } from "../Store/actionTypes";
import { Bookmark } from "../Store/store";

export default function bookmarksReducer(
  state: Bookmark[] = [],
  action: BookmarksActionObject
) {
  switch (action.type) {
    case "ADD_BOOKMARK":
      return [...state, action.payload];
    case "DELETE_BOOKMARK":
      return state.filter((bookmark) => bookmark.url !== action.payload.url);
    case "LOAD_BOOKMARKS_FROM_LOCAL_STORAGE":
      return JSON.parse(localStorage.getItem("bookmarks") || "[]");
    default:
      return state;
  }
}
