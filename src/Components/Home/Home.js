
import { useState } from 'react';
import News from '../News/News';
import Sidebar from '../SideBar/Sidebar'
import './Home.css'

const Home = () => {
    const [isListView , setListView] = useState(true);

    const setListViewHandler = () =>{
        setListView(!isListView);
    }


    return(
        <div className='Home'>
            <Sidebar isListView = {isListView} setHorizontalView={setListViewHandler}/>
            <News isListView = {isListView}/>
        </div>
    )
}

export default Home;