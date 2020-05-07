import React from "react";
import Gallery from '../components/Gallery';
import '../assets/css/views/CharacterPageView.css';
import charactersInfo from '../services/characterStub.js';

const CharacterPageView = props => {
    const character = charactersInfo[props.match.params.id];

    return (
        <div>
            <div className="character-page-view-container">
                <div className="character-page-view-overlay">
                    <div className="character-page-content">
                        <h1 className="character-page-name">
                            {character.name}
                        </h1>
                        <div className="character-description-container">
                            <div
                            className="character-img"
                            style={{ backgroundImage: `url("${character.face_photo}")` }}
                            ></div>
                            <p className="character-description">
                                {character.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Gallery images={character.gallery}/>
            </div>
        </div>
    );
}

export default CharacterPageView;