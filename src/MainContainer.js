import { useState, useContext } from "react";

import ArticleContext from "./ArticleContext";
import ContentContainer from "./ContentContainer";
import SearchContext from "./SearchContext";

import Form from "./Form";

function MainContainer({ appMode }) {
  const { article, setArticle } = useContext(ArticleContext);
  const { searchResults, setSearchResults } = useContext(SearchContext);

  const [fetchTarget, setFetchTarget] = useState("");
  const [serpStart, setSerpStart] = useState(1);
  const [mode, setMode] = appMode;

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

    const fetchResult = await fetch(
      `https://api.telegra.ph/getPage/${fetchTarget.slice(
        19
      )}?return_content=true`
    );
    const response = await fetchResult.json();
    console.log(response);
    setArticle(() => Object.assign({}, response.result));
    setMode(true);
  }

  async function searchHandler(event) {
    event.preventDefault();
    setSerpStart(1);
    setSearchResults((state) => Object.assign(state, { serp: [] }));

    try {
      const googleResponse = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${
          searchResults.query
        }&start=${1}`
      );
      const result = await googleResponse.json();
      if (!result.items) {
        throw new Error("No results");
      }
      setSearchResults((state) =>
        Object.assign(state, { serp: [...state.serp, ...result.items] })
      );
      setMode(false);
      setSerpStart((state) => state + 10);
      console.log(searchResults);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="main-container col-9">
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
      <ContentContainer
        appMode={appMode}
        data={article}
        mode={mode}
        serpStart={serpStart}
        setSerpStart={setSerpStart}
      />
    </div>
  );
}

export default MainContainer;
