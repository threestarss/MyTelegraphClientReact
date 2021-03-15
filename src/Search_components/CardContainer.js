import Card from "./Card";

function CardContainer({ data, children }) {
  return (
    <div className="row row-cols-1 row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
      {data.map((elem, index) => (
        <Card {...elem} key={index + 1} />
      ))}
      {children}
    </div>
  );
}

export default CardContainer;
