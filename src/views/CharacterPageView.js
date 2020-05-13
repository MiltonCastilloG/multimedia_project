import React, { useState } from "react";
import Gallery from '../components/Gallery';
import ImageModal from '../components/ImageModal';
import '../assets/css/views/CharacterPageView.css';
import charactersInfo from '../services/characterStub.js';

const useAudio = url => {
    const audio = new Audio(url);
    audio.play();
}
const CharacterPageView = props => {
    const [imageInModalIndex, setImageInModalIndex] = useState(undefined);
    const character = charactersInfo[props.match.params.id];

    const setImageModal = (index) => setImageInModalIndex(index);
    const unsetImageModal = () => setImageInModalIndex(undefined);

    const getImageModalSrc = index => character.gallery[index]; 

    const getImageModal = index => {
        if(index === undefined)
            return <div></div>
        else
            return <ImageModal image={getImageModalSrc(index)} closeCallback={unsetImageModal}/>
    }

    useAudio(character.welcome_audio);

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
                <Gallery
                images={character.gallery}
                imgCallback={setImageModal}/>
            </div>
            {getImageModal(imageInModalIndex)}
        </div>
    );
}

export default CharacterPageView;