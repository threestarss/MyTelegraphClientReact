import { useEffect, createElement } from "react";
import { useDispatch, useSelector } from "react-redux";

import ArticleHeader from "./ArticleHeader";
import ArticleTag from "./ArticleTag";

function Article({ article }) {
  const dispatch = useDispatch();

  const serp = useSelector((state) => state.serp.items);
  const scrollPos = useSelector((state) => state.appMode.scrollPos);

  const page = document.querySelector(".main-container");
  const content = article.content.map((elem, index) => {
    if (typeof elem === "string") return createElement("p", null, elem);
    if (elem.tag === "img") return createElement(elem.tag, elem.attrs);
    if (elem.tag === "br") return <br />;
    if (elem.tag === "hr") return <hr />;
    return <ArticleTag {...elem} key={index} />;
  });
  console.log(article);

  useEffect(() => {
    page.scrollTo(0, 0);
  });

  return (
    <div className="article-container">
      <article>
        <button className="go-back-btn btn btn-secondary" onClick={goBack}>
          Go Back
        </button>
        <ArticleHeader
          title={article.title}
          author={article.author_name}
          link={article.url}
          img={article.image_url}
          snippet={article.description}
        />
        {content}
      </article>
    </div>
  );

  function goBack() {
    page.scrollTo(0, scrollPos);
    if (serp) {
      dispatch({ type: "SEARCH_MODE" });
    } else {
      dispatch({ type: "EDITOR_MODE" });
    }
  }
}

export default Article;
