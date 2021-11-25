import HorizontalCard from '../../UI/HorizontalCard';
import VerticalCard from '../../UI/VerticalCard';
import './News.css'
import { useEffect, useState } from 'react';
import Webframe from '../webFrame/Webframe';


const News = (props) => {
    
    const [news, setNews] = useState([])
    const [startNumberV,setStartNumberV] = useState(0);
    const [endNumberV,setendNumberV] = useState(6);
    const [startNumberH,setStartNumberH] = useState(0);
    const [endNumberH,setendNumberH] = useState(5);
    const [idToRemove ,setIdToRemove] = useState(undefined)
    const [isIframeView , setiframeView] = useState(false)

    const fetchNewHandler =async() =>{
        try{
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        if(!responce.ok){
            throw new Error ('Something went worng')
        }
        const data = await responce.json(); 

        const transformeddata = data.map((news) => {
            return {
              id: news.id,
              title: news.title,
              body: news.body,
            };
          });
          setNews(transformeddata)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchNewHandler()
      },[])

      const changePageHandlerVf = () =>{
            setStartNumberV(0)
            setendNumberV(6)
      }
      const changePageHandlerVS = () =>{
            setStartNumberV(7)
            setendNumberV(13)
      }
      const changePageHandlerVT = () =>{
            setStartNumberV(14)
            setendNumberV(20)
      }

      const changePageHandlerHf = () =>{
        setStartNumberH(0)
        setendNumberH(5)
      }
      const changePageHandlerHS = () =>{
        setStartNumberH(6)
        setendNumberH(11)
      }
      const changePageHandlerHT = () =>{
        setStartNumberH(12)
            setendNumberH(17)
      }

      const setIdToRemoveHandler = (value) =>{
        setIdToRemove(value)
      }
      
      useEffect(()=>{
          const filteredNews = news.filter((item) => item.id !== idToRemove);
          console.log(idToRemove)
          setNews(filteredNews)
      },[idToRemove,setNews])

      const iframeClickHandler = () =>{
          setiframeView(!isIframeView)
      }
      console.log(isIframeView)
    console.log(news)
    return(
      <div className='News-card'>
       { isIframeView &&  <Webframe onClick={iframeClickHandler}/> }
            {news.length === 0 && <p className="Error">SomeThing Wents Wrong</p>}
       {props.isListView && <div className='News-vertical'>
           {news.slice(startNumberV, endNumberV).map(i => {
             return <VerticalCard onClick={iframeClickHandler} key={i.id} img={"https://source.unsplash.com/user/erondu/192x108"} Title={i.title} setIdToRemoveHandler={setIdToRemoveHandler} description={i.body} i={i.id}  key={i.id} />
           })}
        </div>}

        {!props.isListView &&<div className="News">
            {news.slice(startNumberH, endNumberH).map(i => {
             return <HorizontalCard onClick={iframeClickHandler} key={i.id} img={"https://source.unsplash.com/user/erondu/100x100"} Title={i.title} description={i.body} id={i.id} key={i.id} />
           })}
        </div>}
        <div className="page-numbers">
            <button className='p1' onClick={props.isListView ? changePageHandlerVf : changePageHandlerHf}>1</button>
            <button className='p2'onClick={props.isListView ? changePageHandlerVS : changePageHandlerHS}>2</button>
            <button className='p3'onClick={props.isListView ? changePageHandlerVT : changePageHandlerHT}>3</button>
            <svg aria-hidden="true" className='p4'  focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path  fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
        </div>
        </div>
    )
}

export default News;


