import React from "react";
import '../assets/css/components/Gallery.css';

const Gallery = ({ images }) => {
    return (
        <div className="gallery-container">
            <h1>Galería en construcción...</h1>
            <div className="gallery">
                {
                    images.map((item, index) => (
                        <img 
                        className="gallery-image"
                        src={item} 
                        alt={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Gallery;