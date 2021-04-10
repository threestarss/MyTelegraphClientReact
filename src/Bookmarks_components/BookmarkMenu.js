import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchArticle from "../fetchArticle";

import Bookmark from "./Bookmark";

function BookmarkMenu() {
  const dispatch = useDispatch();

  const bookmarks = useSelector(state => state.bookmarks.list)

  useEffect(() => {
    if (!localStorage.bookmarks) {
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
    dispatch({ type: "ADD_BOOKMARK", payload: JSON.parse(localStorage.getItem("bookmarks"))})
  }, []);

  let bookmarkList = bookmarks.map((elem) => (
    <Bookmark {...elem} key={elem.link} />
  ));

  async function handleClick(event) {
    const bookmark = event.target.closest(".bookmark");
    if (!bookmark) return;

    const link = bookmark.dataset.link;
    if (event.target.parentElement instanceof HTMLButtonElement) {
      deleteBookmark(link);
      return;
    }
    dispatch(fetchArticle(link));
  }

  return (
    <div className="bookmark-container col-3" onClick={handleClick}>
      <div className="bookmark-header border-left ps-2">
        <h2>Bookmarks</h2>
      </div>
      <aside className="bookmark-menu">{bookmarkList}</aside>
    </div>
  );

  function deleteBookmark(link) {
    dispatch({ type: "DELETE_BOOKMARK", payload: link })
  }
}

export default BookmarkMenu;
