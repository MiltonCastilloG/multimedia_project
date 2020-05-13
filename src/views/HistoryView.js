import React, { useState } from "react";
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

    return (
        <div className="history-view-container">
            <div className="history-view-cover">
                <h1 className="history-view-title">
                    La Historia Hasta el Momento
                </h1>
            </div>
            <div className="history-view-content">
                {historyChapterSelect}
                <div className="history-view-text">
                    {historyInfo[historyChapterRef].paragraphs.map(elem=>(
                        <p>{elem}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HistoryView;