import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppContext } from "./AppContext";

import ContentContainer from "./ContentContainer";
import Form from "./Form";
import ErrorModal from "./ErrorModal";

function MainContainer() {
  const { searchResults, setScrollPos, setSearchResults } = useAppContext();

  const error = useSelector((state) => state.appMode.error);
  const [errorType, setErrorType] = useState("");
  const [fetchTarget, setFetchTarget] = useState("");
  const [serpStart, setSerpStart] = useState(1);
  const dispatch = useDispatch();
  const page = document.querySelector(".main-container");

  return (
    <div className="main-container col-9" onClick={saveScrollPosition}>
      <header className="bg-dark container-fluid align-items-center pe-0 g-0">
        <div className="row row-height">
          <div className="header-menu col justify-content-between">
            <img
              className="logo"
              alt="logo"
              src="./icon.png"
              onClick={setModeToNull}
              width="35"
              height="35"
            />
            <Form
              placeholder="Telegra.ph search..."
              handleSubmit={searchHandler}
              handleChange={handleSearchChange}
            />
            <Form
              placeholder="URL of article..."
              handleSubmit={handleFetch}
              handleChange={handleFetchChange}
            />
          </div>
        </div>
      </header>
      {error && <ErrorModal errorType={errorType} />}
      <ContentContainer serpStart={serpStart} setSerpStart={setSerpStart} />
    </div>
  );

  function saveScrollPosition(event) {
    if (!event.target.closest(".card")) return;
    // setScrollPos(page.scrollTop);
    dispatch({
      type: "SET_SCROLL_POS",
      payload: { scrollPos: page.scrollTop },
    });
  }

  function handleFetchChange(event) {
    setFetchTarget(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchResults((state) =>
      Object.assign(state, { query: `${event.target.value}` })
    );
  }

  function setModeToNull() {
    dispatch({ type: "EDITOR_MODE" });
  }

  async function handleFetch(event) {
    event.preventDefault();

    dispatch(
      fetchArticle(
        `https://api.telegra.ph/getPage/${fetchTarget.slice(
          19
        )}?return_content=true`
      )
    );
  }

  async function searchHandler(event) {
    event.preventDefault();
    setErrorType("search");
    try {
      const googleResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${
          searchResults.query
        }&start=${1}`
      );
      const result = await googleResponse.json();
      console.log(result);
      if (!result.items) {
        throw new Error("No results");
      }
      setSerpStart(1);
      setSearchResults((state) =>
        Object.assign(state, { serp: [...result.items] })
      );
      dispatch({ type: "SEARCH_MODE" });
      setSerpStart((state) => state + 10);
      console.log(searchResults);
    } catch (error) {
      dispatch({ type: "ERROR_MODE" });
      console.log(error.message);
    }
  }

  function fetchArticle(link) {
    return async function (dispatch) {
      const fetchResult = await fetch(link);
      const response = await fetchResult.json();
      console.log(response);
      dispatch(articleModeAction(response.result));
    };
  }

  function articleModeAction(result) {
    return {
      type: "ARTICLE_MODE",
      payload: result,
    };
  }
}

export default MainContainer;
