import { useEffect } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button, CircularProgress } from "@material-ui/core";
import { RootState } from "../../Store/store";
import { searchActions } from "../../Header/searchActions";
import { useSearchResultsStyles } from "./useSearchResultsStyles";
import SearchResultsCard from "./SearchResultsCard/SearchResultsCard";
import Loading from "../../Loading";

const Search = withRouter(({ location }) => {
  const classes = useSearchResultsStyles();
  const serp = useSelector((state: RootState) => state.search);
  const query = location.search.slice(7);
  useEffect(() => {
    //TODO: refactor
    if (!serp.searchInformation) {
      searchActions.getSearchResults(query);
    }
  });
  if (!serp.items) return <Loading />;
  return (
    <>
      <div className={classes.root}>
        {serp.items.map((item) => (
          <SearchResultsCard
            title={trimTitle(item.title)}
            url={item.link}
            snippet={item.snippet}
            // TODO: refactor it, looks ugly
            thumbnail={
              item.pagemap.cse_thumbnail !== undefined
                ? item.pagemap.cse_thumbnail[0].src
                : ""
            }
            image={
              item.pagemap.cse_thumbnail !== undefined
                ? item.pagemap.cse_thumbnail[0].src
                : ""
            }
          />
        ))}
      </div>
      <Button onClick={loadMore} className={classes.loadmore}>
        Load more results
      </Button>
    </>
  );

  function loadMore() {
    searchActions.loadMoreResults();
  }
});

// every article title that comes from Google Custom Search API has "– Telegraph" substring at the end.
// function below gets rid of it
function trimTitle(title: string) {
  return title.slice(0, title.length - 12);
}

export default Search;
