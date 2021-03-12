import { useState, useContext } from "react";
import ContentContainer from "./ContentContainer";
import Form from "./Form";
import SearchContext from "./SearchContext";

function MainContainer() {
  const [fetchTarget, setFetchTarget] = useState("test");
  const [fetchResponse, setFetchResponse] = useState("");
  const [welcome, setWelcome] = useState(true);
  const [articleMode, setArticleMode] = useState(false);
  const [searchTarget, setSearchTarget] = useState("");
  const { searchResults, setSearchResults } = useContext(SearchContext);
  const searchMode = true;

  function handleFetchChange(event) {
    setFetchTarget(event.target.value);
  }
  function handleSearchChange(event) {
    setSearchTarget(event.target.value);
  }

  function modeChange() {
    setArticleMode((state) => !state);
    setWelcome((welcome) => !welcome);
  }

  async function fetchHandler(event) {
    event.preventDefault();

    const fetchResult = await fetch(
      `https://api.telegra.ph/getPage/${fetchTarget.slice(
        19
      )}?return_content=true`
    );
    const response = await fetchResult.json();
    setFetchResponse(() => Object.assign({}, response.result));

    if (welcome) {
      setWelcome((welcome) => !welcome);
    }
    setArticleMode((state) => !state);
  }

  async function searchHandler(event) {
    event.preventDefault();
    let start = 1;

    const searchResult = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${searchTarget}&start=${start}`
    );
    const serp = await searchResult.json();
    setSearchResults((state) => [...state, ...serp.items]);
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
              onClick={modeChange}
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
      <ContentContainer welcome={welcome} mode={searchMode} />
    </div>
  );
}

export default MainContainer;
