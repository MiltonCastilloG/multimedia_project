import React from "react";
import Gallery from '../components/Gallery';
import '../assets/css/views/HistoryView.css';
import curiosityInfo from '../services/curiosityStub.js';

const CuriositiesView = () => {

    const getCuriosityContent = content => content.map(elem=>{
        if (elem.type === "text")
            return <p>{elem.content}</p>
        else if (elem.type === "image")
            return <Gallery images={[elem.src]}/>
        else if (elem.type === "youtube")
            return <iframe
            class="character-video"
            width="560"
            height="315"
            src={elem.src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="youtube"></iframe>
        else
            return <div></div>
    });

    return (
        <div className="history-view-container">
            <div className="history-view-cover curiosity-cover">
                <h1 className="history-view-title">
                    Curiosidades
                </h1>
            </div>
            <div className="history-view-content">
                <div className="history-view-media">
                    {getCuriosityContent(curiosityInfo)}
                </div>
            </div>
        </div>
    );
}

export default CuriositiesView;