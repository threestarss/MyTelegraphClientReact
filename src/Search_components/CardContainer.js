import { useEffect } from "react";
import { useAppContext } from "../AppContext";
import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";
import Card from "./Card";

function CardContainer({ appMode, serp }) {
  const { bookmarks, scrollPos, setBookmarks, setArticle } = useAppContext();
  const [, setMode] = appMode;
  const page = document.querySelector(".main-container");

  useEffect(() => {
    page.scrollTo(0, scrollPos);
  }, [scrollPos, page]);

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
    if (!event.target.closest(".card")) return;

    const btnClassList = event.target.parentElement.classList;
    const card = event.target.closest(".card");
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
      }
    } else {
      const article = await fetchArticle(link);
      setArticle(Object.assign({}, article));
      setMode(true);
    }
  }

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

  function addBookmark(link, img, title, snippet) {
    setBookmarks((state) => {
      let newState = [
        ...state,
        new BookmarkConstructor(link, img, title, snippet),
      ];
      localStorage.setItem("bookmarks", JSON.stringify(newState));
      return newState;
    });
  }

  function deleteBookmark(link) {
    setBookmarks((state) => {
      let filteredState = state.filter((elem) => elem.link !== link);
      localStorage.setItem("bookmarks", JSON.stringify(filteredState));
      return filteredState;
    });
  }

  function duplicateCheck(link, arr) {
    return arr.some((elem) => elem.link === link);
  }

  function linkTrim(link) {
    if (link.startsWith("https")) {
      return link.slice(19);
    }
    return link.slice(18);
  }
}

export default CardContainer;
