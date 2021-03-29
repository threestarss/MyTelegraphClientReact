import { useAppContext } from "../AppContext";

import BookmarkBtn from "../Bookmarks_components/BookmarkBtn";
import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";

function ArticleHeader({ title, author, link, img, snippet }) {
  const { bookmarks, setBookmarks } = useAppContext();

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
    if (!event.target.closest(".card")) return;

    const btnClassList = event.target.parentElement.classList;
    const card = event.target.closest(".card");
    const { link, img, title, snippet } = card.dataset;

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
    setBookmarks((state) => {
      let newState = [
        ...state,
        new BookmarkConstructor(link, img, title, snippet),
      ];
      localStorage.setItem("bookmarks", JSON.stringify(newState));
      return newState;
    });
  }

  function deleteBookmark(link) {
    setBookmarks((state) => {
      let filteredState = state.filter((elem) => elem.link !== link);
      localStorage.setItem("bookmarks", JSON.stringify(filteredState));
      return filteredState;
    });
  }
}

export default ArticleHeader;
