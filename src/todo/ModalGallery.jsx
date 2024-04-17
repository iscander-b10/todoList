import React from "react";

const ModalGallery = ({link, setLink}) => {
    
    return(
        <div className={link.length > 0 ? "modal active" : "modal"} onClick={() => setLink("")}>
            <div className="modal__content"  onClick={(e) => {e.stopPropagation()}}>
                <img src={link}/>
            </div>
        </div>
    )
}

export default ModalGallery;