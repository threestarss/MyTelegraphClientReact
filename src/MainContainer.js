import { useState } from "react";
import { useAppContext } from "./AppContext";

import ContentContainer from "./ContentContainer";
import Form from "./Form";
import ErrorModal from "./ErrorModal";

function MainContainer({ appMode }) {
  const {
    article,
    searchResults,
    showError,
    setArticle,
    setScrollPos,
    setSearchResults,
    setShowError,
  } = useAppContext();

  const [errorType, setErrorType] = useState("");
  const [fetchTarget, setFetchTarget] = useState("");
  const [serpStart, setSerpStart] = useState(1);
  const [mode, setMode] = appMode;
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
              handleSubmit={fetchHandler}
              handleChange={handleFetchChange}
            />
          </div>
        </div>
      </header>
      {showError && <ErrorModal errorType={errorType} />}
      <ContentContainer
        appMode={appMode}
        data={article}
        mode={mode}
        serpStart={serpStart}
        setSerpStart={setSerpStart}
      />
    </div>
  );

  function saveScrollPosition(event) {
    if (!event.target.closest(".card")) return;
    setScrollPos(page.scrollTop);
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
    setMode(null);
  }

  async function fetchHandler(event) {
    event.preventDefault();
    setErrorType("fetch");
    try {
      const fetchResult = await fetch(
        `https://api.telegra.ph/getPage/${fetchTarget.slice(
          19
        )}?return_content=true`
      );
      const response = await fetchResult.json();
      console.log(response);
      if (!response.ok) {
        throw new Error("Page not found");
      }
      setArticle(() => Object.assign({}, response.result));
      setMode(true);
    } catch (error) {
      setShowError(true);
      console.error(error);
    }
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
      setMode(false);
      setSerpStart((state) => state + 10);
      console.log(searchResults);
    } catch (error) {
      setShowError(true);
      console.log(error.message);
    }
  }
}

export default MainContainer;
