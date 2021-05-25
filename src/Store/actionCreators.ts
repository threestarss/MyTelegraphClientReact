import { BookmarksPayload, BookmarksActionObject } from './actionTypes';
import { ArticleActionPayload, ArticleActionObject } from './actionTypes';
import { SearchActionPayload, SearchActionObject } from './actionTypes';
import { UserInfoActionPayload, UserInfoActionObject } from './actionTypes';

// TODO: to think:
// 1. Maybe action creators should be in reducers file
// 2. Maybe I should make action creators like this: https://read.reduxbook.com/markdown/part1/04-action-creators.html

export function addBookmark(payload: BookmarksPayload): BookmarksActionObject {
  return { type: 'ADD_BOOKMARK', payload }
}

export function deleteBookmark(payload: BookmarksPayload): BookmarksActionObject {
  return { type: 'DELETE_BOOKMARK', payload }
}

export function loadBookmarks(payload: BookmarksPayload): BookmarksActionObject {
  return { type: 'LOAD_BOOKMARKS_FROM_LOCAL_STORAGE', payload }
}

export function articleMode(payload?: ArticleActionPayload): ArticleActionObject {
  if (payload) return { type: 'ARTICLE_MODE', payload }
  return { type: 'ARTICLE_MODE' }
}

export function searchMode(payload: SearchActionPayload): SearchActionObject {
  return { type: "SEARCH_MODE", payload }
}

// TODO: make editor mode types
export function editorMode(payload: {}) {
  return { type: 'EDITOR_MODE', payload }
}

export function userLogin(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: 'LOGIN', payload }
}

export function userLogout(payload: UserInfoActionPayload): UserInfoActionObject {
  return { type: 'LOGOUT', payload }
}

//TODO: make setScrollPos types
export function setScrollPos(payload: number) {
  return { type: 'SET_SCROLL_POS', payload }
}