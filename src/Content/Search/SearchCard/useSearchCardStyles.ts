import { makeStyles } from "@material-ui/core";

export const useSearchCardStyles = makeStyles({
  root: {
    position: "relative",
    width: "228px",
    height: "410px",
    margin: "0 8px 12px",
  },
  img: {
    height: "150px",
    objectFit: "cover",
  },
  buttonBase: {
    justifyContent: "start",
    textAlign: "initial",
    lineHeight: 1.58,
    flexDirection: "column",
    height: "410px",
  },
});
