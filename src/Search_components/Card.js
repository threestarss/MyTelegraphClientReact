import { useContext } from "react";
import BookmarkBtn from "../Bookmarks_components/BookmarkBtn";
import BookmarksContext from "../BookmarksContext";

function Card({
  title,
  snippet,
  formattedUrl: link,
  pagemap: {
    cse_thumbnail: [{ src: smallImg } = {}] = [],
    cse_image: [{ src: largeImg } = {}] = [],
  },
}) {
  let placeholder = "/src/placeholder.png";
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  function trimTitle(title) {
    return title.slice(0, title.length - 11);
  }

  return (
    <div className="col mt-2 mb-3">
      <div
        className="card"
        data-link={link.toLowerCase()}
        data-img={smallImg || largeImg || placeholder}
        data-title={trimTitle(title)}
        data-snippet={snippet}
      >
        <BookmarkBtn marked={duplicateCheck(link.toLowerCase())} />
        <div className="img-container">
          <img
            className="card-img-top"
            src={smallImg || largeImg || placeholder}
            alt=""
          />
        </div>
        <div className="card-body">
          <h5>{trimTitle(title)}</h5>
          <p>{snippet}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
