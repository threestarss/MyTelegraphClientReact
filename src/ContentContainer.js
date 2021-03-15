import { useContext } from "react";
import Article from "./Article_components/Article";
import SearchContext from "./SearchContext";
import Welcome from "./Welcome";
import CardContainer from "./Search_components/CardContainer";

function ContentContainer({ data, mode, serpStart, setSerpStart }) {
  const { searchResults, setSearchResults } = useContext(SearchContext);

  async function loadMoreResults(event) {
    console.log(searchResults);
    const googleResponse = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${
        searchResults.query
      }&start=${serpStart + 10}`
    );
    const result = await googleResponse.json();
    setSearchResults((state) =>
      Object.assign(state, {
        serp: [...state.serp, ...result.items],
      })
    );
    setSerpStart(serpStart + 10);
    console.log(searchResults);
  }

  return (
    <div className="content-container container-fluid g-0">
      <main>
        <div id="parent">
          {mode === null && <Welcome />}
          {mode === true && <Article article={data} />}
          {mode === false && <CardContainer data={searchResults.serp} />}
          {mode === false && (
            <button onClick={loadMoreResults} id="loadmore">
              Load More Results
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default ContentContainer;
