import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/views/CharacterPageView.css';

const CharacterPageView = () => {
    return (
        <div className="character-page-view-container">
            <div className="character-page-content">
                <h1 className="character-page-name">
                    Nombre
                </h1>
                <div className="character-description-container">
                    <div className="character-img">?</div>
                    <div className="character-description">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a ultrices tortor, sit amet porta felis. Donec vel quam iaculis, congue metus quis, euismod ex. Praesent ornare lectus nec auctor fermentum. Sed pharetra purus eget ligula tincidunt, nec pellentesque odio eleifend. Ut eget lobortis sapien, id semper nunc. Aliquam ultricies molestie porta. Quisque libero metus, euismod quis finibus auctor, interdum placerat nibh. Phasellus dictum enim dignissim, iaculis nulla non, luctus nunc. Nam gravida est eu magna auctor ultrices. Sed hendrerit, nunc a mollis convallis, dolor dolor facilisis ipsum, id tempus ligula justo vitae nibh. Integer aliquam, risus a vehicula sagittis, erat nunc placerat mi, eget lacinia dolor augue eu diam. Vivamus suscipit ac nibh nec semper. Nunc suscipit odio non viverra imperdiet. In ut tempor massa, ut lobortis libero. Vestibulum suscipit risus elit, eu varius urna elementum et. Nullam massa arcu, venenatis eget nibh gravida, eleifend fringilla mauris.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterPageView;