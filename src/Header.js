function Header() {
  return (
    <header className="bg-dark container-fluid align-items-center pe-0 g-0">
      <div className="row row-height">
        <div className="header-menu col justify-content-between">
          <h1 Name="logo">✨</h1>
          <form className="input" action="" id="googleInput">
            <input className="input" type="text" placeholder="Telegra.ph Search..." id="googleValue" onclick="this.select()" />
          </form>
          <form className="input" action="" id="fetchInput">
            <input className="input" type="text" placeholder="URL of article..." id="fetchValue" onclick="this.select()" />
          </form>
        </div>
        <div className="bookmark-header border-left col-3 ps-2">
        <h2>Bookmarks</h2>
        </div>
      </div>
    </header>
  )
}

export default Header;