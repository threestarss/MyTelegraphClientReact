export default function fetchSerp(query, serpStart, loadmore) {
  return async function (dispatch) {
    try {
      const googleResult = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyBit3zVmXZThAxAnPT_j8qBnrQgRN_IrRg&cx=0d7cbe59cd07cfd30&q=${query}&start=${serpStart}`
      );
      const response = await googleResult.json();
      console.log(
        "Logging fetchSerp response:",
        response.items,
        "Load more flag:",
        loadmore
      );
      if (!response.items) throw new Error("No results");
      if (loadmore) {
        dispatch(loadMoreAction(response, serpStart, query));
      } else {
        dispatch(searchStartAction(response, serpStart, query));
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "ERROR_MODE", payload: "" });
    }
  };
}

function searchStartAction(result, serpStart, query) {
  return {
    type: "SEARCH_START",
    payload: { query, serp: result, serpStart: serpStart + 10 },
  };
}

function loadMoreAction(result, serpStart, query) {
  return {
    type: "LOAD_MORE_RESULTS",
    payload: { query, serp: result, serpStart: serpStart + 10 },
  };
}
