import React from "react";
import '../assets/css/components/Gallery.css';

const Gallery = ({ images, imgCallback}) => {

    return (
        <div className="gallery-container">
            <h1>Galería</h1>
            <div className="gallery">
                {
                    images.map((item, index) => (
                        <img onClick={()=>imgCallback(index)}
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