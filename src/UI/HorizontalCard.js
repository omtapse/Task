import "./HorizontalCard.css";
import exit from "./times-solid.svg";

const HorizontalCard = (props) => {
  const today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return (
    <>
      <div className="horizontal-fullcard" onClick={props.onClick}>
        <div className="HorizontalCard">
          <div className="horizontal-card-img">
            <img src={props.img} alt="News-img" />
          </div>
          <div className="news-info">
            <h4>{props.Title}</h4>
            <p>{props.description}</p>
            <p className="three-dots">...</p>
            <div className='date'>{date}</div>
          </div>
        </div>
        <img src={exit} alt="exit" className="exit" />
      </div>
    </>
  );
};

export default HorizontalCard;
