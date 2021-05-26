import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";

import { TestArticle } from "./testArticle";

const Article = () => {
  const dispatch = useDispatch();
  const article = useSelector((state: RootState) => state.article);

  return <TestArticle />;
};

export default Article;
