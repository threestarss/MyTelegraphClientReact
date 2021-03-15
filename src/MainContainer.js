import { useState, useContext } from "react";
import ContentContainer from "./ContentContainer";
import Form from "./Form";
import SearchContext from "./SearchContext";

function MainContainer() {
  const [fetchTarget, setFetchTarget] = useState("test");
  const [fetchResponse, setFetchResponse] = useState("");
  const [serpStart, setSerpStart] = useState(1);
  const [mode, setMode] = useState(null);
  const { searchResults, setSearchResults } = useContext(SearchContext);

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
    setFetchResponse(() => Object.assign({}, response.result));
    setMode(true);
  }

  async function searchHandler(event) {
    event.preventDefault();

    const googleResponse = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${searchResults.query}&start=${serpStart}`
    );
    const result = await googleResponse.json();
    setSearchResults((state) =>
      Object.assign(state, { serp: [...state.serp, ...result.items] })
    );
    setMode(false);
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
        data={fetchResponse}
        mode={mode}
        serpStart={serpStart}
        setSerpStart={setSerpStart}
      />
    </div>
  );
}

export default MainContainer;
