function Card({
  title,
  snippet,
  formattedUrl: link,
  pagemap: {
    cse_thumbnail: [{ src: smallImg } = {}] = [],
    cse_image: [{ src: largeImg } = {}] = [],
  },
}) {
  return (
    <div className="col mt-2 mb-3">
      <div className="card">
        <div className="img-container">
          <img className="card-img-top" src={smallImg || largeImg} alt="" />
        </div>
        <div className="card-body">
          <h5>{title}</h5>
          <p>{snippet}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
