import { Typography } from "@material-ui/core";

import { ArticleNodeElement } from "../../TelegraphAPI/apiTypes";

export const ArticleElement = ({
  tag,
  attrs,
  children,
}: ArticleNodeElement) => {
  if (tag === "br") return <br />;
  if (tag === "hr") return <hr />;
  if (tag === "img" && attrs)
    return <img alt="" src={urlFix(attrs.src) || "#"} />;
  if (tag === "iframe" && attrs)
    return <iframe {...attrs} src={urlFix(attrs.src)} title="title" />;
  return (
    <Typography component={tag} {...attrs}>
      {children &&
        children.map((node, index) => {
          if (typeof node === "string") return node;
          return <ArticleElement {...node} key={index * 111} />;
        })}
    </Typography>
  );
};

// same origin url fix
function urlFix(url = "") {
  if (url.startsWith("/")) return "https://telegra.ph" + url;
  return url;
}
