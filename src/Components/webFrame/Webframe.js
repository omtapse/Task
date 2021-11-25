import Iframe from 'react-iframe'
import Backdrop from '../BackDrop/BackDrop';
import './Webframe.css'

const Webframe = (props) => {
    return(
        <>
        <div className="iframe">
            <Backdrop onClick={props.onClick} />
        <Iframe url="https://careers.kalpas.in/react-developer/"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>
        </>
    )
}

export default Webframe;