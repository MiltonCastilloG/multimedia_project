import React, { useState }from "react";
import ImageModal from '../components/ImageModal';
import '../assets/css/components/Gallery.css';

const Gallery = ({ images }) => {
    const [imageInModalIndex, setImageInModalIndex] = useState(undefined);

    const setImageModal = (index) => setImageInModalIndex(index);
    const unsetImageModal = () => setImageInModalIndex(undefined);

    const getImageModalSrc = index => images[index]; 

    const getImageModal = index => {
        if(index === undefined)
            return <div></div>
        else
            return <ImageModal image={getImageModalSrc(index)} closeCallback={unsetImageModal}/>
    }

    return (
        <div className="gallery-container">
            <div className="gallery">
                {
                    images.map((item, index) => (
                        <img onClick={()=>setImageModal(index)}
                        className="gallery-image"
                        src={item} 
                        alt={index}/>
                    ))
                }
            </div>
            {getImageModal(imageInModalIndex)}
        </div>
    );
}

export default Gallery;