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
    <Typography component={tag}>
      {/* TODO: refactor this, it checks if children arr has a string or not two times */}
      {children &&
        (typeof children[0] === "string"
          ? children[0]
          : children.map(
              (node, index) =>
                typeof node !== "string" && (
                  <ArticleElement {...node} key={index * 111} />
                )
            ))}
    </Typography>
  );
};

// same origin url fix
function urlFix(url = "") {
  if (url.startsWith("/")) return "https://telegra.ph" + url;
  return url;
}
