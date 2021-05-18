import { createStore, combineReducers } from 'redux';

import appStateReducer from '../appStateReducer';
import bookmarksReducer from '../BookmarksComponents/bookmarksReducer';
import articleReducer from '../ContentComponents/articleReducer';
import searchReducer from '../ContentComponents/searchReducer';
import userInfoReducer from '../UserComponents/userInfoReducer';

const rootReducer = combineReducers({
  appState: appStateReducer,
  userInfo: userInfoReducer,
  article: articleReducer,
  search: searchReducer,
  bookmarks: bookmarksReducer
})

export const store = createStore(rootReducer);

store.subscribe(() => localStorage.setItem("bookmarks", JSON.stringify(store.getState().bookmarks)))