import { IconButton, makeStyles } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { bookmarkActions } from "../Store/actionCreators";

//TODO: refactor conditional styles and button coloring

interface BookmarkButtonProps {
  url: string;
  title: string;
  image_url?: string;
  marked: boolean;
  position: PositionOptions;
}

interface PositionOptions {
  top: string;
  right: string;
}

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: (flag: PositionOptions) => flag.top,
    right: (flag: PositionOptions) => flag.right,
  },
}));

const BookmarkButton = ({
  url,
  title,
  image_url,
  marked,
  position,
}: BookmarkButtonProps) => {
  const classes = useStyles(position);
  return (
    <IconButton onClick={handleClick} classes={classes}>
      {marked ? (
        <BookmarkIcon style={{ color: "#dc143c" }} />
      ) : (
        <BookmarkBorderIcon />
      )}
    </IconButton>
  );
  function handleClick() {
    if (!marked) {
      bookmarkActions.add(url, title, image_url);
    } else {
      bookmarkActions.delete(url, title, image_url);
    }
  }
};

export default BookmarkButton;
