import './VerticalCard.css'
import exit from "./times-solid.svg";

const VerticalCard = (props) => {
    return(
        <>
            <div className="vertical-card" onClick={props.onClick}>
                <div className="exit-vertical">
                    <img src={exit} alt="exit"/>
                </div>
                <h3 onClick={e => console.log("Clicked")}>{props.Title}</h3>
                <p onClick={e => console.log("Clicked")}>{props.description}</p>
                <img className='vertical-image' onClick={e => console.log("Clicked")} src={props.img} alt="images" />
            </div>
        </>
    )
}

export default VerticalCard;