import { useContext } from "react";
import Article from "./Article";
import SearchContext from "./SearchContext";
import Welcome from "./Welcome";
import CardContainer from "./CardContainer";

function ContentContainer({ welcome, data, mode }) {
  const { searchResults, setSearchResults } = useContext(SearchContext);
  console.log(searchResults);
  return (
    <div className="content-container container-fluid g-0">
      <main>
        <div id="parent">
          {welcome && <Welcome />}
          {/* {mode ? <Article article={data} /> : null} */}
          {searchResults ? <CardContainer data={searchResults} /> : null}
        </div>
      </main>
    </div>
  );
}

export default ContentContainer;
