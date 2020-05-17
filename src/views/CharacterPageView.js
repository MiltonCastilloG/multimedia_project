import React, { useEffect } from "react";
import Gallery from '../components/Gallery';
import '../assets/css/views/CharacterPageView.css';
import charactersInfo from '../services/characterStub.js';

const CharacterPageView = props => {
    const character = charactersInfo[props.match.params.id];

    useEffect(()=>{
        const audio = new Audio(character.welcome_audio);
        audio.loop = false;
        audio.play();
    }, [character]);

    

    return (
        <div>
            <div className="character-page-view-container">
                <div className="character-page-view-overlay">
                    <div className="character-page-content">
                        <h1 className="character-page-name">
                            {character.name}
                        </h1>
                        <div className="character-description-container">
                            {/* <div
                            className="character-img"
                            style={{ backgroundImage: `url("${character.face_photo}")` }}
                            ></div> */}
                            <iframe
                            class="character-video"
                            width="560"
                            height="315"
                            src={character.youtube}
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="youtubes"></iframe>
                            <p className="character-description">
                                {character.description}
                            </p>
                            <div class="character-playlist-container">
                                <h2 class="character-playlist-title">
                                    Escucha las canciones favoritas de {character.name}:
                                </h2>
                                <iframe
                                class="character-playlist"
                                src={character.spotify}
                                width="300"
                                height="340"
                                frameborder="0" 
                                allowtransparency="true"
                                title="spotify">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="gallery-title">Galería</h1>
                <Gallery
                images={character.gallery}/>
            </div>
            
        </div>
    );
}

export default CharacterPageView;