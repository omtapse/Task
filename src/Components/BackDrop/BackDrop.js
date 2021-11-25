import './BackDrop.css'

const Backdrop = (props) =>{
    return ( <div onClick={props.onClick} className={props.isFeedBackView ? 'Backdrop active' : 'Backdrop'} ></div> )
}


export default Backdrop