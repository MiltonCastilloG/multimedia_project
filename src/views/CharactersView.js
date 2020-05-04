import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/views/CharactersView.css';
import charactersInfo from '../services/stub.js'

const CharactersView = () => {

    const characterButtons = charactersInfo.map( (item, index) =>{
        const backgroundImage = require(`../assets/img/${item.full_photo}`);
        return (
            <div
            className="select-character-button"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
            key={index}
            >
                <Link className="select-character-link" to={`/character-page-view/${index}`}>
                    <div className="character-button-space">
                    </div>
                    <div className="character-name">
                        {item.name}
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="characters-view-container">
            <div className="characters-view-content">
                <h1 className="characters-view-title">
                    Personajes
                </h1>
                <div className="characters-container">
                    {characterButtons}
                </div>
            </div>
        </div>
    );
}

export default CharactersView;