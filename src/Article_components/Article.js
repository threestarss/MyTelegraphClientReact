import ArticleHeader from "./ArticleHeader";
import ArticleTag from "./ArticleTag";

function Article({ article }) {
  const content = article.content.map((elem, index) => {
    if (elem.tag === "br") {
      return <br />;
    }
    if (elem.tag === "hr") {
      return <hr />;
    }
    return <ArticleTag {...elem} key={index} />;
  });
  console.log(article);

  return (
    <div className="article-container">
      <article>
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
}

export default Article;
