import React from "react";

const ModalGallery = ({link, setLink}) => {
    
    return(
        <div className={link.lenght>0 ? "modal active" : "modal"} onClick={() => setLink("link")}>
            <div className="modal__content"  onClick={(e) => e.stopPropagation()}>
                <div>Привет, !!!</div>
            </div>
        </div>
    )
}

export default ModalGallery;