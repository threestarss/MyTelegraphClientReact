function ArticleHeader({ title, author }) {
  return (
    <header className="article-header">
      <h3>{title}</h3>
      <p>{author}</p>
    </header>
  );
}

export default ArticleHeader;
