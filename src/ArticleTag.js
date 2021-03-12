import React from "react";
// наверно стоит переделать с React.createElement, JSX здесь только мешает

function ArticleTag({ tag, children, attrs }) {
  function childrenMap(array) {
    return children.map((elem, index) =>
      typeof elem === "string" ? elem : <ArticleTag {...elem} key={index} />
    );
  }
  let telegraphUrl = "https://telegra.ph";
  switch (tag) {
    case "aside":
      return <aside>{childrenMap(children)}</aside>;
    case "h3":
      return <h3 id={attrs ? attrs.id : ""}>{childrenMap(children)}</h3>;
    case "h4":
      return <h4 id={attrs ? attrs.id : ""}>{childrenMap(children)}</h4>;
    case "h5":
      return <h5 id={attrs ? attrs.id : ""}>{childrenMap(children)}</h5>;
    case "figure":
      return <figure>{childrenMap(children)}</figure>;
    case "figcaption":
      return <figcaption>{childrenMap(children)}</figcaption>;
    case "pre":
      return <pre>{childrenMap(children)}</pre>;
    case "br":
      return <br />;
    case "p":
      return <p>{childrenMap(children)}</p>;
    case "img":
      return (
        <img
          src={attrs.src.startsWith("/") ? telegraphUrl + attrs.src : attrs.src}
          alt={attrs.alt}
        />
      );
    case "blockquote":
      return <blockquote>{childrenMap(children)}</blockquote>;
    case "iframe":
      return (
        // eslint-disable-next-line jsx-a11y/iframe-has-title
        <iframe
          src={attrs.src.startsWith("/") ? telegraphUrl + attrs.src : attrs.src}
          frameBorder={attrs.frameborder}
          width={attrs.width}
          height={attrs.height}
          allowFullScreen={attrs.allowfullscreen}
          allowtransparency={attrs.allowtransparency}
          scrolling={attrs.scrolling}
        />
      );
    default:
      return <br />;
  }
}

export default ArticleTag;
