import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

function ErrorModal({ errorType }) {
  const dispatch = useDispatch();
  const timeoutRef = useRef(null);
  const errorRef = useRef(null);
  const errorRoot = document.querySelector("#error-root");
  if (!errorRef.current) {
    const div = document.createElement("div");
    errorRef.current = div;
  }

  useEffect(() => {
    errorRoot.append(errorRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch({ type: "ERROR_MODE" });
      errorRoot.removeChild(errorRef.current);
    }, 4000);
  }, []);

  return createPortal(
    <div className="error" onClick={removeError}>
      <p>
        {errorType === "search" &&
          "Your search did not match any documents. Make sure that all words are spelled correctly."}
        {errorType === "article" && "Page Not Found"}
      </p>
    </div>,
    errorRef.current
  );

  function removeError(event) {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "ERROR_MODE" });
    errorRoot.removeChild(errorRef.current);
  }
}

export default ErrorModal;
