export default function fetchArticle(link) {
  return async function (dispatch) {
    try {
      const fetchResult = await fetch(
        `https://api.telegra.ph/getPage/${linkTrim(link)}?return_content=true`
      );
      const response = await fetchResult.json();
      console.log("Logging fetchArticle response:", response.items);
      if (!response.ok) throw new Error("Page not found");
      dispatch(articleModeAction(response.result));
    } catch (error) {
      console.log(error)
      dispatch({ type: "ERROR_MODE", payload: error.message });
    }
  };
}

function articleModeAction(result) {
  return {
    type: "ARTICLE_MODE",
    payload: result,
  };
}

function linkTrim(link) {
  if (link.startsWith("https")) return link.slice(19);
  return link.slice(18);
}
