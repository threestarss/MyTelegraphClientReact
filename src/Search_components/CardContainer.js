import { useAppContext } from "../AppContext";

import BookmarkConstructor from "../Bookmarks_components/BookmarkConstructor";
import Card from "./Card";

function CardContainer({ appMode, data, children }) {
  const { bookmarks, setBookmarks, setArticle } = useAppContext();
  const [, setMode] = appMode;

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  async function handleClick(event) {
    const btnClassList = event.target.parentElement.classList;
    const card = event.target.closest(".card");
    const datasetObj = Object.assign({}, card.dataset);
    const { link, img, title, snippet } = datasetObj;
    if (event.target.parentElement instanceof HTMLButtonElement) {
      if (btnClassList.contains("marked")) {
        btnClassList.toggle("marked");
        setBookmarks((state) => {
          let filteredState = state.filter((elem) => elem.link !== link);
          localStorage.setItem("bookmarks", JSON.stringify(filteredState));
          return filteredState;
        });
      } else if (!duplicateCheck(link)) {
        btnClassList.toggle("marked");
        setBookmarks((state) => {
          let newState = [
            ...state,
            new BookmarkConstructor(link, img, title, snippet),
          ];
          localStorage.setItem("bookmarks", JSON.stringify(newState));
          return newState;
        });
      }
    } else {
      const fetchResult = await fetch(
        `https://api.telegra.ph/getPage/${link.slice(19)}?return_content=true`
      );
      const response = await fetchResult.json();
      console.log(link);
      setArticle(Object.assign({}, response.result));
      setMode(true);
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
