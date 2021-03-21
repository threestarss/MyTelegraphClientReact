import { useAppContext } from "../AppContext";

import BookmarkBtn from "../Bookmarks_components/BookmarkBtn";
import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";

function ArticleHeader({ title, author, link, img, snippet }) {
  const { bookmarks, setBookmarks } = useAppContext();

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  function handleClick(event) {
    if (event.target.parentElement instanceof HTMLButtonElement) {
      const btnClassList = event.target.parentElement.classList;
      const header = event.target.closest("header");
      const datasetObj = Object.assign({}, header.dataset);
      const { link, img, title, snippet } = datasetObj;

      if (btnClassList.contains("marked")) {
        btnClassList.toggle("marked");
        setBookmarks((state) => {
          let filteredState = state.filter((elem) => elem.link !== link);
          localStorage.setItem("bookmarks", JSON.stringify(filteredState));
          return filteredState;
        });
      } else if (!duplicateCheck(link)) {
        btnClassList.toggle("marked");
        setBookmarks((state) => {
          let newState = [
            ...state,
            new BookmarkConstructor(link, img, title, snippet),
          ];
          localStorage.setItem("bookmarks", JSON.stringify(newState));
          return newState;
        });
      }
    }
  }

  return (
    <header
      className="article-header"
      data-link={link.toLowerCase()}
      data-title={title}
      data-snippet={snippet}
      data-img={img}
      onClick={handleClick}
    >
      <BookmarkBtn link={link.toLowerCase()} />
      <h3>{title}</h3>
      <p>{author}</p>
    </header>
  );
}

export default ArticleHeader;
