import { ArticleActionObject } from "../../Store/actionTypes";

export default function articleReducer (state = {}, action: ArticleActionObject) {
  if (action.payload) {
    return action.payload;
  }
  return state;
}