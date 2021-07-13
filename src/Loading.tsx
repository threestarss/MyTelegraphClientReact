import { makeStyles, CircularProgress } from "@material-ui/core";

const useLoadingStyles = makeStyles({
  spinner: {
    position: "absolute",
    color: "inherit",
  },
  container: {
    position: "relative",
    marginTop: "40%",
    left: "50%",
  },
});

const Loading = () => {
  const classes = useLoadingStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.spinner} />
    </div>
  );
};

export default Loading;
