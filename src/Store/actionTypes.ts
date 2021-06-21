import { Page } from "../TelegraphAPI/apiTypes";
import { Bookmark } from "./store";

export type Action<ActionType, PayloadType> = {
  type: ActionType;
  payload?: PayloadType;
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

export type ArticleActionType = "ARTICLE_MODE" | "ARTICLE_CONTENT_LOADED";
export type ArticleActionPayload = Page;
export type ArticleActionObject = Action<
  ArticleActionType,
  ArticleActionPayload
>;

export type SearchActionType = "SEARCH_MODE";
export type SearchActionPayload = {};
export type SearchActionObject = Action<SearchActionType, SearchActionPayload>;

export type UserInfoActionType = "LOGIN" | "LOGOUT";
export type UserInfoActionPayload = {};
export type UserInfoActionObject = Action<
  UserInfoActionType,
  UserInfoActionPayload
>;

export type AppStateActionType =
  | ArticleActionType
  | SearchActionType
  | "EDITOR_MODE"
  | "SET_SCROLL_POS"
  | "SET_ERROR";
export type AppStateActionPayload = {};
export type AppStateActionObject = Action<
  AppStateActionType,
  AppStateActionPayload
>;

// TODO: refactor
// some ways to refactor action objects:
// 1. https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm
// 2. https://pastebin.com/bwH5Q0Em
