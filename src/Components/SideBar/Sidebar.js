import "./Sidebar.css";
import profile from './profile.png'
import {  useState } from "react";
import validator from 'validator';
import { countryList } from './countryList'
import Backdrop from '../BackDrop/BackDrop'
import ReactDOM from 'react-dom'

const Sidebar = (props) => {
  const [numberisValid , setNumberIsValid] = useState(true)
  const [mailisValid , setmailIsValid] = useState(true)


  const numberChangeHandler = (event) =>{
    setNumberIsValid(false) 
    const isValid = validator.isLength(event.target.value,{min:10,max:10})
    setNumberIsValid(isValid)
  }
 const mailChangeHandler = (event) =>{
    setmailIsValid(false) 
    const isValid = validator.isEmail(event.target.value)
    setmailIsValid(isValid)
}

  const [isFeedBackView , setIsFeedBackView] = useState(false);

  const feedBackViewHandler = () =>{
    setIsFeedBackView(!isFeedBackView)
  }
  {if(isFeedBackView){
    
   }}

  return (
    <>
      <div className={isFeedBackView ? 'SideBar feedback' : 'SideBar'}>
        <div className="sidebar-first-column">
        <div className="profile">
          <img src={profile} alt="" />
          <div className="info">
            <h4>Hi Reader</h4>
            <p>Here's your News!</p>
          </div>
        </div>
       {!isFeedBackView && <div className="toogle">
          <h3>View Toggle</h3>
          <div className='toggle-img' onClick={props.setHorizontalView}>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="list-alt"  draggable='false' className={!props.isListView ? "toggle-buttons-img img1 active" : "toggle-buttons-img img1"} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path></svg>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" className={props.isListView ? "toggle-buttons-img img2 active" : "toggle-buttons-img img2"} draggable='false'  data-icon="grip-horizontal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M96 288H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM96 96H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160 0h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z"></path></svg>
          </div>
        </div>}
        <div className="feedBack">
            <h3>Have a Feedback?</h3>
            <button id={isFeedBackView ? 'red-color-button' : ''} onClick={feedBackViewHandler}>We're Listening</button>
        </div>
        </div>
     <div className= {isFeedBackView ? 'feedbackForm active' : 'feedbackForm'}>
        <h3>Thank you so much for taking the time!</h3>
        <p>Please provide the below details!  </p>
        <div className="inputs-field">
            <label className='lable' htmlFor="fname">First Name:</label>
            <input type="text" name="fname" placeholder="John" id="fname" />
            <label className='lable' htmlFor="lname">Last Name:</label>
            <input type="text" name="lname" placeholder="Doe" id="lname" />
            <label className='lable' htmlFor="address">Address:</label>
            <textarea name="address" id="address" placeholder="Enter Your Full Postal Address" cols="30" rows="10"></textarea>
            <label className='lable' htmlFor="country" >Country</label>
            <input type="text"  list='data1' id="country" placeholder="India"/>
            <datalist id="data1">
            {countryList.map(element => {
              return <option key={element} value={element}></option>
              })}
              </datalist>
            
            <label className='lable' htmlFor="e-mail">E-mail:</label>
            <div className="email">
            <input className='lable' type="text" name="e-mail" id="e-mail" placeholder="example@sample.com"  onChange={mailChangeHandler} />
            {!mailisValid && <p className="error">Please enter a valid e-mail</p>}
            </div>
              <label className='lable' htmlFor="phone-no">Phone Number:</label>
            <div className="phone-number">
            <input type="text" name="phone-no" id="phone-first" placeholder="+91" maxLength='4' size='4'/>
            <input type="number" name="phone-no" id="phone-sec" placeholder="123456789" onChange={numberChangeHandler}  />
            {!numberisValid &&<p className="error">Please enter a valid number</p>}
            </div>
            <button className='Submit-Feedback'>Submit Feedback</button>
        </div>
      </div>
      </div>
      {isFeedBackView && ReactDOM.createPortal(<Backdrop onClick={feedBackViewHandler} isFeedBackView={isFeedBackView}/>, document.getElementById('overlays'))}
    </>
  );
};

export default Sidebar;
