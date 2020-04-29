import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/components/Menu.css';

const Menu = ({closeMenu}) => {
    return (
        <div className="menu-container">
            <div className="menu-block">
                <div className="menu" >
                    <div className="menu-item">
                        <Link to="/" className="menu-item-text" onClick={closeMenu}>
                            Portada
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/history" className="menu-item-text" onClick={closeMenu}>
                            Historia
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/characters" className="menu-item-text" onClick={closeMenu}>
                            Personajes
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/news" className="menu-item-text" onClick={closeMenu}>
                            Sobre el proyecto
                        </Link>
                    </div>
                </div>
            </div>
            <div className="menu-cover" onClick={closeMenu}/>
        </div>  
    )
}

export default Menu;