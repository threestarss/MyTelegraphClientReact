import { AppStateActionObject } from "./Store/actionTypes";

export default function appStateReducer(state = { contentMode: 'article', scrollPos: 0}, action: AppStateActionObject) {
  switch(action.type) {
    case "ARTICLE_MODE":
      return {...state, contentMode: 'article'}
    case "SEARCH_MODE":
      return {...state, contentMode: 'search'}
    case "EDITOR_MODE":
      return {...state, contentMode: 'editor'}
    case "SET_SCROLL_POS":
      return {...state, scrollPos: action.payload}
    default: 
      return state;
  }
}