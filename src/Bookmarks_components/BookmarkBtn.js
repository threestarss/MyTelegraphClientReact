import { useAppContext } from "../AppContext";

function BookmarkBtn({ link }) {
  const { bookmarks } = useAppContext();

  return (
    <button
      className={`${
        duplicateCheck(link, bookmarks) ? "marked" : ""
      } bookmark-btn`}
    >
      <i className="fas fa-bookmark"></i>
    </button>
  );

  function duplicateCheck(link, arr) {
    return arr.some((elem) => elem.link === link);
  }
}

export default BookmarkBtn;
