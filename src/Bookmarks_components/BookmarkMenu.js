import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppContext } from "../AppContext";

import Bookmark from "./Bookmark";

function BookmarkMenu({ appMode }) {
  const { bookmarks, setBookmarks, setArticle } = useAppContext();
  // const [, setMode] = appMode;
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
    if (!event.target.closest(".bookmark")) return;

    const bookmark = event.target.closest(".bookmark");
    const link = bookmark.dataset.link;

    if (event.target.parentElement instanceof HTMLButtonElement) {
      deleteBookmark(link);
    } else {
      const article = await fetchArticle(link);
      setArticle(Object.assign({}, article));
      // setMode(true);
      dispatch({ type: "ARTICLE_MODE" });
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

  async function fetchArticle(link) {
    const fetchResult = await fetch(
      `https://api.telegra.ph/getPage/${linkTrim(link)}?return_content=true`
    );
    const response = await fetchResult.json();
    // console.log(link);
    // console.log(fetchResult);
    // console.log(response);
    return response.result;
  }

  function deleteBookmark(link) {
    setBookmarks((state) => {
      let filteredState = state.filter((elem) => elem.link !== link);
      localStorage.setItem("bookmarks", JSON.stringify(filteredState));
      return filteredState;
    });
  }

  function linkTrim(link) {
    if (link.startsWith("https")) return link.slice(19);
    return link.slice(18);
  }
}

export default BookmarkMenu;
