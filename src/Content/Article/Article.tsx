import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { RootState } from "../../Store/store";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleElement } from "./ArticleElement";
import { useArticleStyles } from "../useArticleStyles";

const Article = () => {
  const classes = useArticleStyles();
  const article = useSelector((state: RootState) => state.article);
  if (!article.content) return null;
  return (
    <Paper component="article" elevation={3} classes={classes}>
      <ArticleHeader
        title={article.title}
        views={article.views}
        author_name={article.author_name}
      />
      {article.content.map((node, index) => {
        if (typeof node === "string")
          return <ArticleElement tag="p" children={[node]} key={index} />;
        return <ArticleElement {...node} key={index} />;
      })}
    </Paper>
  );
};

export default Article;
