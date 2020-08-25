import React, { useState } from "react";
import Gallery from '../components/Gallery';
import '../assets/css/views/HistoryView.css';
import historyInfo from '../services/historyStub.js'

const HistoryView = () => {
    const [historyChapterRef, setHistoryChaptereRef] = useState(0);

    const changeHistoryChapter = ref => setHistoryChaptereRef(ref);

    const historyChapterSelect = (
        <div className="history-chapter-button-container">
        {
            historyInfo.map( (elem, index)=>(
                <div 
                className="history-chapter-button"
                onClick={()=>changeHistoryChapter(index)}
                style={{backgroundColor: index===historyChapterRef ? "#262d3a" :"inherit"}}
                >
                    {elem.chapter}
                </div>
            ))
        }
        </div>
    )

    const getHistoryContent = content => content.map(elem=>{
        if (elem.type === "header")
            return <h2 className="header-title">{elem.content}</h2>
        else if (elem.type === "text")
            return <p>{elem.content}</p>
        else if (elem.type === "audio")
            return (
                <audio className="history-audio" controls>
                    <source
                    src={require(`../assets/audio/${elem.src}`)}
                    type={`audio/${elem.media_type}`} />
                </audio>
            )
        else if (elem.type === "image")
            return <Gallery images={[elem.src]}/>
        else if (elem.type === "multi-image")
            return <Gallery images={elem.src}/>
        else
            return <div></div>
    })

    return (
        <div className="history-view-container">
            <div className="history-view-cover">
                <h1 className="history-view-title">
                    Historia
                </h1>
            </div>
            <div className="history-view-content">
                {historyChapterSelect}
                <div className="history-view-media">
                    {getHistoryContent(historyInfo[historyChapterRef].contents)}
                </div>
            </div>
        </div>
    );
}

export default HistoryView;