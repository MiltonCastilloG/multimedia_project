import React from "react";
import '../assets/css/Home.css';

const Home = () => {
    return (
        <div className="cover">
            <div className="cover-content">
                <h2 className="cover-subtitle">
                    Bienvenido a
                </h2>
                <h1 className="cover-title">
                    Cuatro Lunas
                </h1>
                <div className="cover-button-container">
                    <button className="cover-button">DESCUBRE LA HISTORIA</button>
                </div>
            </div>
        </div>
    );
}

export default Home;