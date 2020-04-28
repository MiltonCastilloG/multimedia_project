import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/Menu.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-block">
                <div className="menu" >
                    <div className="menu-item">
                        <Link to="/" className="menu-item-text" >
                            Portada
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/news" className="menu-item-text" >
                            Historia
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/news" className="menu-item-text">
                            Personajes
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/news" className="menu-item-text">
                            Sobre el proyecto
                        </Link>
                    </div>
                </div>
            </div>
            <div className="menu-cover" />
        </div>  
    )
}

export default Menu;