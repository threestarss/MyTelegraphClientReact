import { bindActionCreators } from "redux";
import { store } from "../Store/store";
import googleSearchAPI from "../GoogleSearchAPI/googleSearchAPI";
import { SearchResult } from "../GoogleSearchAPI/apiTypes";
import { SearchActionObject } from "../Store/actionTypes";

interface SearchActions {
  getSearchResults: (query: string) => () => Promise<void>;
  loadMoreResults: () => () => Promise<void>;
  setSearchResult: (serp: SearchResult) => SearchActionObject;
  setMoreResults: (serp: SearchResult) => SearchActionObject;
  setError: (err: Error) => void;
}

function getSearchResults(this: SearchActions, query: string) {
  return async () => {
    try {
      const result = await googleSearchAPI.search(query);
      this.setSearchResult(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function loadMoreResults(this: SearchActions) {
  return async () => {
    try {
      const result = await googleSearchAPI.loadMoreResults();
      this.setMoreResults(result);
    } catch (err) {
      this.setError(err);
    }
  };
}

function setMoreResults(serp: SearchResult): SearchActionObject {
  return { type: "SERP_LOADED_MORE_RESULTS", payload: serp };
}

function clearSearchResults(): SearchActionObject {
  return { type: "SERP_CLEAR" };
}

function setSearchResult(serp: SearchResult): SearchActionObject {
  return { type: "SERP_LOADED", payload: serp };
}

function setError(error: Error) {
  console.log(error);
  return { type: "error" };
}

export const searchActions = bindActionCreators(
  {
    getSearchResults,
    loadMoreResults,
    setSearchResult,
    clearSearchResults,
    setMoreResults,
    setError,
  },
  store.dispatch
);
