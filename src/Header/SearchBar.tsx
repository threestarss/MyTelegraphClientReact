import { useState } from "react";
import { Input } from "@material-ui/core";
import { searchActions } from "./searchActions";
import { appModeActions } from "../appModeActions";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <Input fullWidth onChange={handleChange} />
    </form>
  );

  function handleChange(event: any) {
    setQuery(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    appModeActions.setSearchMode();
    searchActions.getSearchResults(query);
  }
};

export default SearchBar;
