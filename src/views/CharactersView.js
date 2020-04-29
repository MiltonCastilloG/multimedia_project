import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/views/CharactersView.css';

const CharactersView = () => {
    return (
        <div className="characters-view-container">
            <div className="characters-view-content">
                <h1 className="characters-view-title">
                    Personajes
                </h1>
                <div className="characters-container">
                    <div className="select-character-button">
                        <Link className="select-character-link" to="/character-page-view">
                            <div className="character-button-space">
                            </div>
                            <div className="character-name">
                                Elisa
                            </div>
                        </Link>
                    </div>
                    <div className="select-character-button">
                        <Link className="select-character-link" to="/character-page-view">
                            <div className="character-button-space">
                            </div>
                            <div className="character-name">
                                Alia
                            </div>
                        </Link>
                    </div>
                    <div className="select-character-button">
                        <Link className="select-character-link" to="/character-page-view">
                            <div className="character-button-space">
                            </div>
                            <div className="character-name">
                                David
                            </div>
                        </Link>
                    </div>
                    <div className="select-character-button">
                        <Link className="select-character-link" to="/character-page-view">
                            <div className="character-button-space">
                            </div>
                            <div className="character-name">
                                Julia
                            </div>
                        </Link>
                    </div>
                    <div className="select-character-button">
                        <Link className="select-character-link" to="/character-page-view">
                            <div className="character-button-space">
                            </div>
                            <div className="character-name">
                                Narrador
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharactersView;