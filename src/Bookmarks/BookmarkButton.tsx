import { IconButton } from "@material-ui/core";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import { bookmarkActions } from "../Store/actionCreators";

interface BookmarkButtonProps {
  url: string;
  title: string;
  image_url?: string;
  marked: boolean;
}

const BookmarkButton = ({
  url,
  title,
  image_url,
  marked,
}: BookmarkButtonProps) => {
  return (
    <IconButton onClick={handleClick}>
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
      // TODO: REFACTOR ACTION CREATORS they are awful
      bookmarkActions.add(url, title, image_url);
    } else {
      bookmarkActions.delete(url, title, image_url);
    }
  }
};

export default BookmarkButton;
