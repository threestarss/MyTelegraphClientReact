function Card(props) {
  return (
    <div className="col mt-2 mb-3">
      <div className="card">
        <div className="img-container">
          <img className='card-img-top' src={ props.img || props.imgThumbnail } alt=""/>
        </div>
        <div className="card-body">
          <h5 className>{ props.title }</h5>
          <p className>{ props.snippet }</p>
        </div>
      </div>
    </div>
  )
}

export default Card;