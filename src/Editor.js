import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Quill from "quill";
import Toolbar from "./Toolbar.js";

function Editor() {
  const dispatch = useDispatch();

  const [showToolbar, setShowToolbar] = useState(false);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);

  useEffect(() => {
    var quill = new Quill("#editor", {
      modules: {
        toolbar: "#toolbar",
      },
    });
    quill.on("selection-change", (range, oldRange, source) => {
      if (range) {
        let selectionCoords = quill.getBounds(range);
        setXCoord((selectionCoords.left + 140 + selectionCoords.right) / 2);
        setYCoord(selectionCoords.top + 35);
        if (range.length) {
          setShowToolbar(true);
          return;
        }
      }
      setShowToolbar(false);
    });
  }, []);

  return (
    <div className="editor-container">
      <article>
        <Toolbar showToolbar={showToolbar} xCoord={xCoord} yCoord={yCoord} />
        <div id="editor">
          <h1 data-placeholder="Title..." data-label="Title" className="empty">
            Title
          </h1>
          <address data-placeholder="Your name...">Your name</address>
          <p data-placeholder="Your name...">Your story...</p>
        </div>
        <button className="btn btn-secondary go-back-btn" onClick={createPage}>
          Publish
        </button>
      </article>
    </div>
  );

  async function createPage(event) {
    let article = document.querySelector(".ql-editor");
    let content = domToNodeArray(Array.from(article.childNodes));
    console.log("Logging NodeArray: ", content);
    let url = createFetchTarget(content);
    let result = await fetch(url, {
      method: "POST",
    });
    let response = await result.json();
    console.log("Logging response from Telegra.ph API: ", response);
    dispatch({ type: "ARTICLE_MODE", payload: response.result });
  }

  function domToNodeArray(arrOfDomElems) {
    return arrOfDomElems.map((elem) => {
      if (elem.nodeType === elem.TEXT_NODE) return elem.data;
      let node = {};
      node.tag = elem.tagName.toLowerCase();
      if (elem.attributes.length > 0) {
        node.attrs = {};
        for (let i = 0; i < elem.attributes.length; i++) {
          let attribute = elem.attributes[i];
          node.attrs[attribute.name] = attribute.value;
        }
      }
      if (elem.childNodes.length > 0) {
        node.children = domToNodeArray(Array.from(elem.childNodes));
      }
      return node;
    });
  }

  function createFetchTarget(content) {
    let url = new URL("https://api.telegra.ph/createPage");
    url.searchParams.set(
      "access_token",
      "48ee8f8f12080379721ab27db684b005dc7234856b2898e6a7f6f5071cc8"
    );
    url.searchParams.set("title", "testing");
    url.searchParams.set("content", JSON.stringify(content));
    url.searchParams.set("return_content", "true");
    console.log(url);
    return url;
  }
}

export default Editor;
