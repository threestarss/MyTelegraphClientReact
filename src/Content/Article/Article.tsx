import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { ArticleElement } from "./ArticleElement";
import { useArticleStyles } from "../useArticleStyles";
import { TestArticle } from "./testArticle";

const Article = () => {
  const classes = useArticleStyles();
  const dispatch = useDispatch();
  const article = useSelector((state: RootState) => state.article);

  return (
    <>
      {!article.content ? (
        <TestArticle />
      ) : (
        <article className={classes.root}>
          {article.content.map((node) => {
            if (typeof node === "string")
              return <ArticleElement tag="p" children={[node]} />;
            return <ArticleElement {...node} />;
          })}
        </article>
      )}
    </>
  );
};

export default Article;
