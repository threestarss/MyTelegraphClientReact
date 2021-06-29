import { IconButton, makeStyles } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { bookmarkActions } from "../Store/actionCreators";

interface BookmarkButtonProps {
  url: string;
  title: string;
  image_url?: string;
  marked: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    top: "5px",
    right: "10px",
  },
}));

const BookmarkButton = ({
  url,
  title,
  image_url,
  marked,
}: BookmarkButtonProps) => {
  const classes = useStyles();
  return (
    <IconButton onClick={handleClick} classes={classes}>
      {marked ? (
        // TODO: think of better way to color the button
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
