export type PayloadAction<ActionType, PayloadType> = {
  type: ActionType;
  payload?: PayloadType;
}


// TODO: define payloads.

// ADD_BOOKMARK type has new Bookmark object as payload
// DELETE_BOOKMARK type has new Array of Bookmarks as payload
// LOAD_BOOKMARKS_FROM_LOCAL_STORAGE same as DELETE_BOOKMARK

export type BookmarksActionType = 'ADD_BOOKMARK' | 'DELETE_BOOKMARK' | 'LOAD_BOOKMARKS_FROM_LOCAL_STORAGE';
export type BookmarksPayload = {};
export type BookmarksActionObject = PayloadAction<BookmarksActionType, BookmarksPayload>;

export type ArticleActionType = 'ARTICLE_MODE';
export type ArticleActionPayload = {};
export type ArticleActionObject = PayloadAction<ArticleActionType, ArticleActionPayload>

export type SearchActionType = 'SEARCH_MODE';
export type SearchActionPayload = {};
export type SearchActionObject = PayloadAction<SearchActionType, SearchActionPayload>;

export type UserInfoActionType = 'LOGIN' | "LOGOUT";
export type UserInfoActionPayload = {};
export type UserInfoActionObject = PayloadAction<UserInfoActionType, UserInfoActionPayload>;

export type AppStateActionType = ArticleActionType | SearchActionType | 'EDITOR_MODE' | 'SET_SCROLL_POS';
export type AppStateActionPayload = {};
export type AppStateActionObject = PayloadAction<AppStateActionType, AppStateActionPayload>;