import { useEffect, createElement } from "react";
import { useAppContext } from "../AppContext";

import ArticleHeader from "./ArticleHeader";
import ArticleTag from "./ArticleTag";

function Article({ article, appMode }) {
  const { searchResults } = useAppContext();
  const [, setMode] = appMode;
  const page = document.querySelector(".main-container");
  const content = article.content.map((elem, index) => {
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
        <button className="go-back-btn" onClick={goBack}>
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
    if (searchResults.serp.length !== 0) {
      setMode(false);
    } else {
      setMode(null);
    }
  }
}

export default Article;
