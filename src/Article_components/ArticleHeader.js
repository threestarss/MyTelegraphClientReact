import { useDispatch, useSelector } from "react-redux"

import BookmarkBtn from "../Bookmarks_components/BookmarkBtn";
import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";

function ArticleHeader({ title, author, link, img, snippet }) {
  const dispatch = useDispatch()
  const bookmarks = useSelector(state => state.bookmarks.list)

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

  function duplicateCheck(link, arr) {
    return arr.some((elem) => elem.link === link);
  }

  function handleClick(event) {
    if (!event.target.closest("header")) return;
    console.log(bookmarks);

    const btnClassList = event.target.parentElement.classList;
    const header = event.target.closest("header");
    const { link, img, title, snippet } = header.dataset;

    if (event.target.parentElement instanceof HTMLButtonElement) {
      if (btnClassList.contains("marked")) {
        btnClassList.toggle("marked");
        deleteBookmark(link);
        return;
      }
      if (!duplicateCheck(link, bookmarks)) {
        btnClassList.toggle("marked");
        addBookmark(link, img, title, snippet);
      }
    }
  }

  function addBookmark(link, img, title, snippet) {
    dispatch({ type: "ADD_BOOKMARK", payload: [ new BookmarkConstructor(link, img, title, snippet) ]});
  }

  function deleteBookmark(link) {
    dispatch({ type: "DELETE_BOOKMARK", payload: link })
  }
}

export default ArticleHeader;
