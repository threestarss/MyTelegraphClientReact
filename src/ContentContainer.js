import { useDispatch, useSelector } from "react-redux";

import Article from "./Article_components/Article";
import CardContainer from "./Search_components/CardContainer";
import Welcome from "./Welcome";

import fetchSerp from "./fetchSerp";

function ContentContainer() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.appMode.mode);
  const data = useSelector((state) => state.article);
  const serpStart = useSelector((state) => state.serp.serpStart);
  const query = useSelector((state) => state.serp.query);

  return (
    <main className="content-container container-fluid g-0">
      <div id="parent">
        {mode === null && <Welcome />}
        {mode === true && <Article article={data} />}
        {mode === false && <CardContainer />}
        {mode === false && (
          <button onClick={loadMoreResults} id="loadmore">
            Load More Results
          </button>
        )}
      </div>
    </main>
  );

  async function loadMoreResults(event) {
    dispatch(fetchSerp(query, serpStart, 1));
  }
}

export default ContentContainer;
