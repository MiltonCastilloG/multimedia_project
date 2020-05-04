import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/views/Home.css';

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
                    <Link to="/history">
                        <button className="cover-button">DESCUBRE LA HISTORIA</button>
                    </Link>
                </div>
            </div>
            <div className="company-name">
                Presentado por: SIXIEME COMPANY
            </div>
        </div>
    );
}

export default Home;