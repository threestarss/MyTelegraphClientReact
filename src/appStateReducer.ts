import { AppStateActionObject } from "./Store/actionTypes";

export default function appStateReducer(state = { contentMode: 'article', scrollPos: 0, error: ''}, action: AppStateActionObject) {
  switch(action.type) {
    case "ARTICLE_MODE":
      return { ...state, contentMode: 'article' }
    case "SEARCH_MODE":
      return { ...state, contentMode: 'search' }
    case "EDITOR_MODE":
      return { ...state, contentMode: 'editor' }
    case "SET_SCROLL_POS":
      return { ...state, scrollPos: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    default: 
      return state;
  }
}