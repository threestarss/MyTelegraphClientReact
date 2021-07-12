import { useState } from "react";
import { withRouter } from "react-router";
import { InputAdornment, TextField } from "@material-ui/core";
import { searchActions } from "./searchActions";
import { appModeActions } from "../appModeActions";
import SearchIcon from "@material-ui/icons/Search";
import { useSearchBarStyles } from "./useSearchBarStyles";

const SearchBar = withRouter(({ history }) => {
  const [query, setQuery] = useState("");
  const classes = useSearchBarStyles();

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        variant="filled"
        placeholder="Search..."
        margin="dense"
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </form>
  );

  function handleChange(event: any) {
    setQuery(event.target.value);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    searchActions.clearSearchResults();
    appModeActions.setSearchMode();
    history.push(`/search?query=${query}`);
  }
});

export default SearchBar;
