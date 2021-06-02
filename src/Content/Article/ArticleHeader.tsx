import { Typography } from "@material-ui/core";

interface ArticleHeaderProps {
  title: string;
  author_name?: string;
  author_url?: string;
  views: number;
}

export const ArticleHeader = ({
  title,
  author_name = "Anonymous",
  author_url,
  views,
}: ArticleHeaderProps) => {
  return (
    <header>
      <Typography component="h1">{title}</Typography>
      <address>
        <a href={author_url || "#"}>{author_name}</a> | Просмотры: {views}
      </address>
    </header>
  );
};
