import { useAppContext } from "../AppContext";

function BookmarkBtn({ link }) {
  const { bookmarks } = useAppContext();

  function duplicateCheck(link) {
    return bookmarks.some((elem) => elem.link === link);
  }

  return (
    <button className={`${duplicateCheck(link) ? "marked" : ""} bookmark-btn`}>
      <i className="fas fa-bookmark"></i>
    </button>
  );
}

export default BookmarkBtn;
