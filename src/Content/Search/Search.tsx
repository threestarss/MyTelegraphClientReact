import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { searchActions } from "../../Store/actionCreators";
import { RootState } from "../../Store/store";
import SearchCard from "./SearchCard/SearchCard";
import { useSearchStyles } from "./useSearchStyles";

const Search = () => {
  const classes = useSearchStyles();
  const serp = useSelector((state: RootState) => state.search);
  useEffect(() => {
    searchActions.fetchSearch("Undermind");
  }, []);
  return serp.items ? (
    <>
      <div className={classes.root}>
        {serp.items.map((item) => (
          <SearchCard
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
  ) : null;

  function loadMore() {
    searchActions.loadMoreResults();
  }
};

// every article title that comes from Google Custom Search API has "– Telegraph" substring at the end.
// function below gets rid of it
function trimTitle(title: string) {
  return title.slice(0, title.length - 12);
}

export default Search;
