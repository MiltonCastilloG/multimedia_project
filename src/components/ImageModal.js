import React from "react";
import '../assets/css/components/ImageModal.css';

const ImageModal = ({ image, closeCallback }) => {
    console.log(image)
    return (
        <div class="img-modal-container" onClick={closeCallback}>
            <span 
            class="close"
            >
                &times;
            </span>
            <img
            class="img-modal-content"
            src={image}
            alt="modal_img"/>
        </div>
    );
}

export default ImageModal;