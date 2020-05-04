import React from "react";
import '../assets/css/views/CharacterPageView.css';
import charactersInfo from '../services/stub.js'

const CharacterPageView = props => {
    const character = charactersInfo[props.match.params.id];
    const backgroundImage = require(`../assets/img/${character.face_photo}`);

    return (
        <div className="character-page-view-container">
            <div className="character-page-view-overlay">
                <div className="character-page-content">
                    <h1 className="character-page-name">
                        {character.name}
                    </h1>
                    <div className="character-description-container">
                        <div
                        className="character-img"
                        style={{ backgroundImage: `url("${backgroundImage}")` }}
                        ></div>
                        <p className="character-description">
                            {character.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterPageView;