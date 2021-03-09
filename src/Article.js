import ArticleHeader from './ArticleHeader';

function Article(props) {
  const content = props.content.map(elem => /* обработка ответа API, по итогу content будет массивом jsx элементов */);

  return (
    <article>
      <ArticleHeader title={title} author={author} />
      { content }
    </article>
  )
}

export default Article;