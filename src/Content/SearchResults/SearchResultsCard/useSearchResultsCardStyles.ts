import { makeStyles } from "@material-ui/core";

export const useSearchResultsCardStyles = makeStyles({
  root: {
    position: "relative",
    width: "228px",
    height: "407px",
    margin: "0 8px 12px",
  },
  img: {
    flexShrink: 0,
    height: "150px",
  },
  buttonBase: {
    justifyContent: "start",
    textAlign: "initial",
    lineHeight: 1.58,
    flexDirection: "column",
    height: "100%",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
});
