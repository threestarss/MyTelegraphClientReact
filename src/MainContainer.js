import { Welcome } from "./Welcome";
function BookmarkMenu() {
  return (
    <aside className="bookmark-menu col-3">

    </aside>
  )
}


function MainContainer() {
  return (
    <div className='main-container container-fluid g-0'>
      <div className="row">
        <main className='col-9' id='parent'>
          <Welcome />
        </main>
        <BookmarkMenu />
      </div>
    </div>
  )
}

export default MainContainer;