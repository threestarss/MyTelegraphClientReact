function ArticleHeader(props) {
  return (
    <header className="article-header">
      <h3>{props.title}</h3>
      <p>{props.author}</p>
    </header>
  );
}

export default ArticleHeader;