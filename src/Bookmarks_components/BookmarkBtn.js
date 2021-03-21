import { useContext } from "react";
import BookmarksContext from "../BookmarksContext";

function BookmarkBtn({ link }) {
  const { bookmarks } = useContext(BookmarksContext);

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  return (
    <button className={`${duplicateCheck(link) ? "marked" : ""} bookmark-btn`}>
      <i className="fas fa-bookmark"></i>
    </button>
  );
}

export default BookmarkBtn;
