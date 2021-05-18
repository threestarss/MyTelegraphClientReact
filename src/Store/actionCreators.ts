import { BookmarksActionType, BookmarksPayload, BookmarksActionObject } from './actionTypes';
import { ArticleActionType, ArticleActionPayload, ArticleActionObject } from './actionTypes';
import { SearchActionType, SearchActionPayload, SearchActionObject } from './actionTypes';
import { UserInfoActionType, UserInfoActionPayload, UserInfoActionObject } from './actionTypes';
import { AppStateActionType, AppStateActionPayload, AppStateActionObject } from './actionTypes';

// TODO: to think:
// 1. Maybe action creators should be in reducers file
// 2. Maybe I should make action creators like this: https://read.reduxbook.com/markdown/part1/04-action-creators.html

export function bookmarksActionCreator(type: BookmarksActionType, payload: BookmarksPayload): BookmarksActionObject {
  return { type, payload }
}

export function articleActionCreator(type: ArticleActionType, payload: ArticleActionPayload): ArticleActionObject {
  return { type, payload }
}

export function searchActionCreator(type: SearchActionType, payload: SearchActionPayload): SearchActionObject {
  return { type, payload }
}

export function userInfoActionCreator(type: UserInfoActionType, payload: UserInfoActionPayload): UserInfoActionObject {
  return { type, payload }
}

export function appStateActionCreator(type: AppStateActionType, payload?: AppStateActionPayload): AppStateActionObject {
  if (payload) return { type, payload }
  return { type }
}