import { useSelector } from "react-redux";
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { useSearchResultsCardStyles } from "./useSearchResultsCardStyles";
import { RootState } from "../../../Store/store";
import { articleActions } from "../../Article/articleActions";
import { appModeActions } from "../../../appModeActions";
import BookmarkButton from "../../../Bookmarks/BookmarkButton";

interface SearchCardProps {
  title: string;
  url: string;
  snippet: string;
  thumbnail?: string;
  image?: string;
}

const SearchResultsCard = ({
  title,
  url,
  snippet,
  thumbnail,
  image,
}: SearchCardProps) => {
  const classes = useSearchResultsCardStyles();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  let marked = bookmarks.some((bookmark) => bookmark.url === url.toLowerCase());
  return (
    <Card className={classes.root} onClick={handleClick}>
      <ButtonBase className={classes.buttonBase}>
        <CardMedia
          className={classes.img}
          component="img"
          src={thumbnail || image || ""}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <br></br>
          <Typography variant="body2">{snippet}</Typography>
        </CardContent>
      </ButtonBase>
      <BookmarkButton
        url={url}
        title={title}
        image_url={thumbnail || image || ""}
        marked={marked}
        position={{ top: "0px", right: "0px" }}
      />
    </Card>
  );

  function handleClick(event: any) {
    // TODO: think of better click handler, these target checks look ugly
    if (
      event.target.tagName === "svg" ||
      event.target.type === "button" ||
      event.target.tagName === "path"
    )
      return;
    console.log(event);
    appModeActions.setArticleMode();
    articleActions.getArticle(url);
  }
};

export default SearchResultsCard;
