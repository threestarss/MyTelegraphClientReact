import { useContext } from "react";
import BookmarksContext from "../BookmarksContext";

import Card from "./Card";

function CardContainer({ data, children }) {
  const { bookmarks, setBookmarks } = useContext(BookmarksContext);
  function BookmarkConstructor(link, img, title, snippet) {
    this.link = link;
    this.img = img;
    this.title = title;
    this.snippet = snippet;
  }

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  function handleClick(event) {
    if (event.target.parentElement instanceof HTMLButtonElement) {
      const btnClassList = event.target.parentElement.classList;
      const card = event.target.closest(".card");
      const datasetObj = Object.assign({}, card.dataset);
      const { link, img, title, snippet } = datasetObj;

      if (btnClassList.contains("marked")) {
        btnClassList.toggle("marked");
        setBookmarks((state) => state.filter((elem) => elem.link !== link));
      } else if (!duplicateCheck(link)) {
        setBookmarks((state) => [
          ...state,
          new BookmarkConstructor(link, img, title, snippet),
        ]);
        btnClassList.toggle("marked");
      }
    }
  }

  return (
    <div
      className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1"
      onClick={handleClick}
    >
      {data.map((elem, index) => (
        <Card {...elem} key={index + 1} />
      ))}
      {children}
    </div>
  );
}

export default CardContainer;
