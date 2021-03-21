import { useEffect } from "react";
import { useAppContext } from "../AppContext";

import Bookmark from "./Bookmark";

function BookmarkMenu({ appMode }) {
  const { bookmarks, setBookmarks, setArticle } = useAppContext();
  const [, setMode] = appMode;

  useEffect(() => {
    if (!localStorage.bookmarks) {
      localStorage.setItem("bookmarks", JSON.stringify([]));
    }
    getBookmarksFromLocalStorage();
  }, []);

  function getBookmarksFromLocalStorage() {
    setBookmarks(JSON.parse(localStorage.getItem("bookmarks")));
  }

  let bookmarkList = bookmarks.map((elem) => (
    <Bookmark {...elem} key={elem.link} />
  ));

  async function handleClick(event) {
    const bookmark = event.target.closest(".bookmark");
    const link = bookmark.dataset.link;
    if (event.target.parentElement instanceof HTMLButtonElement) {
      setBookmarks((state) => {
        let filteredState = state.filter((elem) => elem.link !== link);
        localStorage.setItem("bookmarks", JSON.stringify(filteredState));
        return filteredState;
      });
    } else {
      const fetchResult = await fetch(
        `https://api.telegra.ph/getPage/${link.slice(19)}?return_content=true`
      );
      const response = await fetchResult.json();
      console.log(response);
      setArticle(Object.assign({}, response.result));
      setMode(true);
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
