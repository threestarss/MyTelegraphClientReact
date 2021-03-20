import { useContext } from "react";
import Bookmark from "./Bookmark";
import BookmarksContext from "../BookmarksContext";

function BookmarkMenu({ appMode, bookmarks }) {
  const [mode, setMode] = appMode;
  const { setBookmarks } = useContext(BookmarksContext);
  let bookmarkList = bookmarks.map((elem) => (
    <Bookmark {...elem} key={elem.link} />
  ));

  function handleClick(event) {
    if (event.target.parentElement instanceof HTMLButtonElement) {
      const bookmark = event.target.closest(".bookmark");
      const link = bookmark.dataset.link;

      setBookmarks((state) => state.filter((elem) => elem.link !== link));
    }
  }

  return (
    <div className="bookmark-container col-3" onClick={handleClick}>
      <div className="bookmark-header border-left ps-2">
        <h2>Bookmarks</h2>
      </div>
      <aside className="bookmark-menu">{bookmarkList}</aside>
    </div>
  );
}

export default BookmarkMenu;
