import React, { useState } from "react";
import '../assets/css/views/AboutView.css';
import aboutInfo from '../services/aboutStub.js';

const AboutView = () => {
    const [teammatePageRef, setTeammatePageRef] = useState(0);

    const changeTeammatePage = ref => setTeammatePageRef(ref);

    const team = (
        <div className="team-button-container">
        {
            aboutInfo.teamInfo.map( (elem, index)=>(
                <div 
                className="teammate-button"
                onClick={()=>changeTeammatePage(index)}
                style={{backgroundColor: index===teammatePageRef ? "#262d3a" :"inherit"}}
                >
                    {elem.name}
                </div>
            ))
        }
        </div>
    )

    const teammatePage = (
        <div className="team-page-container">
        {
            aboutInfo.teamInfo
            .filter( (elem, index)=> index===teammatePageRef )
            .map(elem =>(
                <div className="teammate-page-container">
                    <img 
                    className="teammate-img"
                    src={elem.img}
                    alt="teammate"/>
                    <div className="teammate-text">
                        {elem.description}
                    </div>
                </div>
            ))
        }
        </div>
    )

    return (
        <div className="about-view-container">
            <div className="about-content">
                <h1 className="about-title">
                    Sobre el proyecto
                </h1>
                <p className="about-text">
                    {aboutInfo.aboutText}
                </p>
                <h1 className="about-origin-title">
                    Origen
                </h1>
                <p className="about-text">
                    {aboutInfo.originText}
                </p>
            </div>
            <div className="about-team-container">
                <h1 className="about-team-title">
                    Equipo
                </h1>
                {team}
                {teammatePage}
            </div>
        </div>
    );
}

export default AboutView;