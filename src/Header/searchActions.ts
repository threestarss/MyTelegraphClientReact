import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import googleSearchAPI from "../GoogleSearchAPI/googleSearchAPI";
import { SearchResult } from "../GoogleSearchAPI/apiTypes";

function getSearchResults(this: any, query: string) {
  return async () => {
    try {
      const result = await googleSearchAPI.search(query);
      this.setSearchResult(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function loadMoreResults(this: any) {
  return async () => {
    try {
      const result = await googleSearchAPI.loadMoreResults();
      this.setMoreResults(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function setMoreResults(serp: SearchResult) {
  return { type: "SERP_LOADED_MORE_RESULTS", payload: serp };
}

function setSearchResult(serp: SearchResult) {
  return { type: "SERP_LOADED", payload: serp };
}

function setError(error: Error) {
  console.log(error);
}

export const searchActions = bindActionCreators(
  {
    getSearchResults,
    loadMoreResults,
    setSearchResult,
    setMoreResults,
    setError,
  },
  store.dispatch
);
