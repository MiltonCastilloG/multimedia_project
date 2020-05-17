import React, { useState } from "react";
import Gallery from '../components/Gallery';
import '../assets/css/views/HistoryView.css';
import recommendationInfo from '../services/recommendationStub.js'

const RecommendationView = () => {
    const [historyChapterRef, setHistoryChaptereRef] = useState(0);

    const changeHistoryChapter = ref => setHistoryChaptereRef(ref);

    const historyChapterSelect = (
        <div className="history-chapter-button-container">
        {
            recommendationInfo.map( (elem, index)=>(
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

    const getRecommendationContent = (content, ref) => {
        if(ref === 0){
            return (
                <div>
                    <Gallery images={[content.infography_src]}/>
                    <Gallery images={content.src}/>
                </div>
            )
        }
        else{
            return <Gallery images={content.src}/>
        }
    }

    return (
        <div className="history-view-container">
            <div className="history-view-cover recommendation-version">
                <h1 className="history-view-title">
                    Recomendaciones
                </h1>
            </div>
            <div className="history-view-content">
                {historyChapterSelect}
                <div className="history-view-media">
                    {getRecommendationContent(recommendationInfo[historyChapterRef], historyChapterRef)}
                </div>
            </div>
        </div>
    );
}

export default RecommendationView;