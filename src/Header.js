function Header({ setFetchResponse, setFetchTarget, setWelcome, fetchTarget }) {
  function handleChange(event) {
    setFetchTarget(event.target.value);
  }

  async function fetchHandler(event) {
    event.preventDefault();

    const fetchResult = await fetch(
      `https://api.telegra.ph/getPage/${fetchTarget.slice(
        19
      )}?return_content=true`
    );
    const response = await fetchResult.json();
    setFetchResponse(() => Object.assign({}, response.result));
  }

  return (
    <header className="bg-dark container-fluid align-items-center pe-0 g-0">
      <div className="row row-height">
        <div className="header-menu col justify-content-between">
          <h1 className="logo">✨</h1>
          <form className="input" id="googleInput">
            <input
              className="input"
              type="text"
              placeholder="Telegra.ph Search..."
              id="googleValue"
            />
          </form>
          <form className="input" onSubmit={fetchHandler}>
            <input
              className="input"
              type="text"
              placeholder="URL of article..."
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
