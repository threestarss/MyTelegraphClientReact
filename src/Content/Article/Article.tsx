import { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { RootState } from "../../Store/store";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleElement } from "./ArticleElement";
import { useArticleStyles } from "./useArticleStyles";
import { articleActions } from "./articleActions";
import Loading from "../../Loading";

const Article = withRouter(({ location }) => {
  const classes = useArticleStyles();
  const { content, title, views, author_name, url, image_url } = useSelector(
    (state: RootState) => state.article
  );
  useEffect(() => {
    if (!content) {
      //TODO: refactor this
      articleActions.getArticle("https://xd" + location.pathname);
    }
  });
  if (!content) return <Loading />;
  return (
    <Paper component="article" elevation={3} classes={classes}>
      <ArticleHeader
        title={title}
        views={views}
        author_name={author_name}
        url={url}
        image_url={image_url}
      />
      {content.map((node, index) => {
        if (typeof node === "string")
          return (
            <ArticleElement
              tag="p"
              children={[node]}
              elemKey={index}
              key={index}
            />
          );
        return <ArticleElement {...node} elemKey={index} key={index} />;
      })}
    </Paper>
  );
});

export default Article;
