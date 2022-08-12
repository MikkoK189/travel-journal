import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img--cont">
        <img className="card--img" src={props.imgSource}></img>
      </div>
      <div className="card--info--cont">
        <div className="card--country">
          <div>
            <img src="../map-pin.svg"></img>
            <h5>{props.country}</h5>
          </div>
          <a href={props.mapsLink}>View on Google Maps</a>
        </div>
        <h2>{props.locationName}</h2>
        <p className="card--duration">{props.duration}</p>
        <p className="card--description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
