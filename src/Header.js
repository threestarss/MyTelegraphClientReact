import { useDispatch } from "react-redux";

export default function Header({ children }) {
  const dispatch = useDispatch();
  return (
    <header className="bg-dark container-fluid align-items-center pe-0 g-0">
      <div className="row row-height">
        <div className="header-menu col justify-content-between">
          <img
            className="logo"
            alt="logo"
            src="./icon.png"
            onClick={setModeToNull}
            width="35"
            height="35"
          />
          {children}
        </div>
      </div>
    </header>
  );

  function setModeToNull() {
    dispatch({ type: "EDITOR_MODE" });
  }
}
