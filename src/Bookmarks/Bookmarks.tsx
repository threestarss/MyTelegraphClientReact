import { useEffect } from "react";
import { Box } from "@material-ui/core";
import { bookmarkActions } from "./bookmarkActions";

const Bookmarks = () => {
  useEffect(() => {
    if (localStorage.bookmarks) {
      bookmarkActions.loadFromLocalStorage(localStorage.bookmarks);
    }
  });
  return <Box width={122}></Box>;
};

export default Bookmarks;
