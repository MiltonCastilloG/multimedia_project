import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"
import '../assets/css/components/NavBar.css';

const iconOneClass = "hamburger-icon";
const iconTwoClass = "x-icon";

const NavBar = ({iconFlag, menuIconCallback, closeMenu}) => {

    const iconClass = iconFlag ? iconTwoClass : iconOneClass;
    
    return (
        <div className="navbar">
            <div className="navbar-item">
            <div className={`icon ${iconClass}`} onClick={menuIconCallback}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            </div>
            <div className="navbar-item">
                <Link to="/" onClick={closeMenu}>
                    <div className="logo"></div>
                </Link>
            </div>
            <div className="navbar-item">
                <div class="social-links">
                    <a href="https://www.instagram.com/cu4trolunas/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://twitter.com/cu4trolunas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
      </div>
    );
}

export default NavBar;