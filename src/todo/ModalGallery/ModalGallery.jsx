import React from "react";
import "./style.css"

const ModalGallery = ({link, setLink}) => {
    
    return(
        <div className={link.length > 0 ? "modal active" : "modal"} onClick={() => setLink("")}>
            <div className="modal__gallery"  onClick={(e) => {e.stopPropagation()}}>
                <img src={link}/>
            </div>
        </div>
    )
}

export default ModalGallery;