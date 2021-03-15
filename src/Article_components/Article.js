import ArticleHeader from "./ArticleHeader";
import ArticleTag from "./ArticleTag";

function Article({ article }) {
  const content = article.content.map((elem, index) => {
    return <ArticleTag {...elem} key={index} />;
  });

  return (
    <div className="article-container">
      <article>
        <ArticleHeader title={article.title} author={article.author_name} />
        {content}
      </article>
    </div>
  );
}

export default Article;
