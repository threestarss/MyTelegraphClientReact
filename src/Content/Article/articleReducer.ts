import { ArticleActionObject } from "../../Store/actionTypes";

export default function articleReducer(
  state = {},
  action: ArticleActionObject
) {
  // TODO: think of nicer way of formatting urls
  let url = action.payload?.url;
  switch (action.type) {
    case "ARTICLE_CONTENT_LOADED":
      return { ...action.payload, url: url?.toLowerCase() };
    default:
      return state;
  }
}
