import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { useSearchCardStyles } from "./useSearchCardStyles";
import BookmarkButton from "../../../Bookmarks/BookmarkButton";
import { RootState } from "../../../Store/store";
import { articleActions, appModeActions } from "../../../Store/actionCreators";

interface SearchCardProps {
  title: string;
  url: string;
  thumbnail?: string;
  image?: string;
}

const SearchCard = ({ title, url, thumbnail, image }: SearchCardProps) => {
  const classes = useSearchCardStyles();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  let marked = bookmarks.some((bookmark) => bookmark.url === url);
  return (
    <Card className={classes.root} onClick={handleClick}>
      <BookmarkButton
        url={url}
        title={title}
        image_url={thumbnail || image || ""}
        marked={marked}
        position={{ top: "0px", right: "0px" }}
      />
      <CardMedia
        className={classes.img}
        component="img"
        src={thumbnail || image || ""}
      ></CardMedia>
      <CardContent>{title}</CardContent>
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
    articleActions.fetchArticle(url);
  }
};

export default SearchCard;
