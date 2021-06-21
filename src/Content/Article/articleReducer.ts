import { ArticleActionObject } from "../../Store/actionTypes";

export default function articleReducer(
  state = {},
  action: ArticleActionObject
) {
  switch (action.type) {
    case "ARTICLE_CONTENT_LOADED":
      return action.payload;
    default:
      return state;
  }
}
