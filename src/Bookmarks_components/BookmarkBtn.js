function BookmarkBtn({ marked }) {
  return (
    <button className={`${marked ? "marked" : ""} bookmark-btn`}>
      <i className="fas fa-bookmark"></i>
    </button>
  );
}

export default BookmarkBtn;
