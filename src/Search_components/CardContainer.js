import { useDispatch, useSelector } from "react-redux";
import fetchArticle from "../fetchArticle";

import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";
import Card from "./Card";

function CardContainer() {
  const dispatch = useDispatch();
  
  const bookmarks = useSelector(state => state.bookmarks.list);
  const serp = useSelector((state) => state.serp.items);

  return (
    <div
      className="card-container row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1"
      onClick={handleClick}
    >
      {serp.map((elem, index) => (
        <Card {...elem} key={index + 1} />
      ))}
    </div>
  );

  async function handleClick(event) {
    const card = event.target.closest(".card");
    if (!card) return;

    const btnClassList = event.target.parentElement.classList;
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
        return;
      }
    }
    dispatch(fetchArticle(link));
  }

  function addBookmark(link, img, title, snippet) {
    dispatch({ type: "ADD_BOOKMARK", payload: [ new BookmarkConstructor(link, img, title, snippet) ]});
  }

  function deleteBookmark(link) {
    dispatch({ type: "DELETE_BOOKMARK", payload: link })
  }

  function duplicateCheck(link, arr) {
    return arr.some((elem) => elem.link === link);
  }
}

export default CardContainer;
