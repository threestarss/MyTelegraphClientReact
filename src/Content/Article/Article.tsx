import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import { RootState } from "../../Store/store";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleElement } from "./ArticleElement";
import { useArticleStyles } from "./useArticleStyles";

const Article = () => {
  const classes = useArticleStyles();
  const { content, title, views, author_name, url, image_url } = useSelector((state: RootState) => state.article);
  if (!content) return null;
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
};

export default Article;
