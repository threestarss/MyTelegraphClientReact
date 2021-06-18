import { Typography } from "@material-ui/core";

import { ArticleNodeElement } from "../../TelegraphAPI/apiTypes";

// maybe i shouldn't use typography conmponent
export const ArticleElement = ({
  tag,
  attrs,
  children,
  elemKey,
}: ArticleNodeElement) => {
  if (tag === "br") return <br />;
  if (tag === "hr") return <hr />;
  if (tag === "img" && attrs)
    return <img alt="" src={urlFix(attrs.src) || "#"} />;
  if (tag === "iframe" && attrs)
    return <iframe {...attrs} src={urlFix(attrs.src)} title="title" />;
  return (
    <Typography component={tag} {...attrs} key={elemKey}>
      {children &&
        children.map((node, index) => {
          if (typeof node === "string") return node;
          return <ArticleElement {...node} key={elemKey + "-" + index} />;
        })}
    </Typography>
  );
};

// same origin url fix
function urlFix(url = "") {
  if (url.startsWith("/")) return "https://telegra.ph" + url;
  return url;
}
