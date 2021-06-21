import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";
import BookmarkButton from "../../Bookmarks/BookmarkButton";
import { RootState } from "../../Store/store";

interface ArticleHeaderProps {
  title: string;
  url: string;
  author_name?: string;
  author_url?: string;
  image_url?: string;
  views: number;
}

export const ArticleHeader = ({
  title,
  url,
  author_name = "Anonymous",
  author_url,
  views,
  image_url,
}: ArticleHeaderProps) => {
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  let marked = bookmarks.some((bookmark) => bookmark.url === url);
  return (
    <header>
      <BookmarkButton
        url={url}
        title={title}
        image_url={image_url}
        marked={marked}
      />
      <Typography component="h1">{title}</Typography>
      <address>
        <a href={author_url || "#"}>{author_name}</a> | Просмотры: {views}
      </address>
    </header>
  );
};
