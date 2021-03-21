import React, { createElement } from "react";

function ArticleTag({ tag, children = [], attrs }) {
  let telegraphUrl = "https://telegra.ph";
  let childTags = children.map((elem, index) => {
    if (typeof elem === "string") {
      return elem;
    }
    if (elem.tag === "img") {
      return createElement(elem.tag, {
        src: `${
          elem.attrs.src.startsWith("/")
            ? telegraphUrl + elem.attrs.src
            : elem.attrs.src
        }`,
      });
    }
    if (elem.tag === "br") {
      return <br />;
    }
    if (elem.tag === "hr") {
      return <hr />;
    }
    return <ArticleTag {...elem} key={index} />;
  });
  return createElement(tag, attrs, childTags);
}

export default ArticleTag;
