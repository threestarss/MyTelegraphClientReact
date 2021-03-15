function Card({
  title,
  snippet,
  formattedUrl: link,
  pagemap: {
    cse_thumbnail: [{ src: smallImg } = {}] = [],
    cse_image: [{ src: largeImg } = {}] = [],
  },
}) {
  function trimTitle(title) {
    return title.slice(0, title.length - 11);
  }

  return (
    <div className="col mt-2 mb-3" onClick={(event) => console.log(event)}>
      <div
        className="card"
        data-link={link}
        data-snippet={snippet}
        data-title={trimTitle(title)}
      >
        <div className="img-container">
          <img className="card-img-top" src={smallImg || largeImg} alt="" />
        </div>
        <div className="card-body">
          <h5>{trimTitle(title)}</h5>
          <p>{snippet}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
