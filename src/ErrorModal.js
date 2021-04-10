import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

function ErrorModal() {
  const dispatch = useDispatch();

  const errorType = useSelector(state => state.appMode.errorType)
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
    }, 3500);
  }, []);

  return createPortal(
    <div className="error" onClick={removeError}>
      <p>
        {errorType}
      </p>
    </div>,
    errorRef.current
  );

  function removeError(event) {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "ERROR_MODE", payload: "" });
    errorRoot.removeChild(errorRef.current);
  }
}

export default ErrorModal;
