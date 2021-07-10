import { bindActionCreators } from "redux";
import { store } from "../../Store/store";
import telegraphAPI from "../../TelegraphAPI/telegraphAPI";
import { Page } from "../../TelegraphAPI/apiTypes";

// TODO: type this properly
function getArticle(this: any, url: string) {
  return async () => {
    try {
      const result = await telegraphAPI.getPage(new URL(url));
      this.setArticleContent(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function setArticleContent(article: Page) {
  return { type: "ARTICLE_CONTENT_LOADED", payload: article };
}

function setError(error: Error) {
  console.log(error);
}

export const articleActions = bindActionCreators(
  {
    getArticle,
    setArticleContent,
    setError,
  },
  store.dispatch
);
