import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  appMode,
  article,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function appMode(state = { mode: null, error: false, scrollPos: 0 }, action) {
  if (action.type === "ARTICLE_MODE") {
    return {
      ...state,
      mode: true,
    };
  }
  if (action.type === "SEARCH_MODE") {
    return {
      ...state,
      mode: false,
    };
  }
  if (action.type === "EDITOR_MODE") {
    return {
      ...state,
      mode: null,
    };
  }
  if (action.type === "ERROR_MODE") {
    return {
      ...state,
      error: !state.error,
    };
  }
  if (action.type === "SET_SCROLL_POS") {
    return {
      ...state,
      scrollPos: action.payload.scrollPos,
    };
  }
  return state;
}

function article(state = {}, action) {
  if (action.type === "ARTICLE_MODE") {
    return {
      ...state,
      result: { ...action.payload },
    };
  }
  return state;
}
