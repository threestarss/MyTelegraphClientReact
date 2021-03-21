import { useContext } from "react";
import BookmarksContext from "../BookmarksContext";

import BookmarkBtn from "./BookmarkBtn";

function Bookmark({ link, img, title, snippet }) {
  const { bookmarks } = useContext(BookmarksContext);

  return (
    <div className="row bookmark g-0" data-link={link}>
      <div className="col-4">
        <img src={img} alt="" />
      </div>
      <div className="bookmark-text col-8">
        <BookmarkBtn link={link} />
        <h5>{title}</h5>
        <p>{snippet}</p>
      </div>
    </div>
  );
}

export default Bookmark;
