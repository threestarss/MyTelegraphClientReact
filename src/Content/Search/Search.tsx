import { useEffect } from "react";
import { useSelector } from "react-redux";
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
    <div className={classes.root}>
      {serp.items.map((item) => (
        <SearchCard
          title={item.title}
          url={item.link}
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
  ) : null;
};

export default Search;
