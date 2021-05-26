import { Typography } from "@material-ui/core";
import Image from "material-ui-image";

import { ArticleNodeElement } from "../../TelegraphAPI/apiTypes";

export const ArticleElement = ({
  tag,
  attrs,
  children,
}: ArticleNodeElement) => {
  if (tag === "br") return <br />;
  if (tag === "hr") return <hr />;
  if (tag === "img" && attrs) return <Image src={attrs.src || "#"} />;
  return (
    <Typography component={tag}>
      {/* TODO: refactor this, it checks if children arr has a string or not two times */}
      {children &&
        (typeof children[0] === "string"
          ? children[0]
          : children.map(
              (node) => typeof node !== "string" && <ArticleElement {...node} />
            ))}
    </Typography>
  );
};
