import { useEffect } from "react";
import { useDispatch } from "react-redux";

import fetchArticle from "../fetchArticle";
import { useAppContext } from "../AppContext";

import Bookmark from "./Bookmark";

function BookmarkMenu() {
  const { bookmarks, setBookmarks } = useAppContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.bookmarks) {
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks")));
  }, [setBookmarks]);

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
    setBookmarks((state) => {
      let filteredState = state.filter((elem) => elem.link !== link);
      localStorage.setItem("bookmarks", JSON.stringify(filteredState));
      return filteredState;
    });
  }
}

export default BookmarkMenu;
