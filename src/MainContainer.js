import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContentContainer from "./ContentContainer";
import Header from "./Header";
import Form from "./Form";
import ErrorModal from "./ErrorModal";

import fetchArticle from "./fetchArticle";
import fetchSerp from "./fetchSerp";

function MainContainer() {
  const dispatch = useDispatch();
  
  const error = useSelector((state) => state.appMode.error);
  const [fetchTarget, setFetchTarget] = useState("");
  const [searchTarget, setSearchTarget] = useState("");
  const page = document.querySelector(".main-container");

  return (
    <div className="main-container col-9" onClick={saveScrollPosition}>
      <Header>
        <Form
          placeholder="Telegra.ph search..."
          handleSubmit={handleSearch}
          handleChange={handleSearchTargetChange}
        />
        {/* <Form
          placeholder="URL of article..."
          handleSubmit={handleFetch}
          handleChange={handleFetchTargetChange}
        /> */}
      </Header>
      {error && <ErrorModal />}
      <ContentContainer />
    </div>
  );

  function saveScrollPosition(event) {
    if (!event.target.closest(".card")) return;
    dispatch({
      type: "SET_SCROLL_POS",
      payload: page.scrollTop,
    });
  }

  function handleFetchTargetChange(event) {
    setFetchTarget(event.target.value);
  }

  function handleSearchTargetChange(event) {
    setSearchTarget(event.target.value);
  }

  async function handleFetch(event) {
    event.preventDefault();
    dispatch(fetchArticle(fetchTarget));
  }

  async function handleSearch(event) {
    event.preventDefault();
    await dispatch(fetchSerp(searchTarget, 1));
    dispatch({ type: "SEARCH_MODE" });
  }
}

export default MainContainer;
