import React from "react";
import { Modal } from "@mui/material";
import "./style.css"

const ModalGallery = ({link, setLink}) => {
    return(
        <Modal  
            open={link.length > 0}
            onClose={() => setLink("")}>
                <div className="modal__gallery">
                    <img src={link}/>
                </div>
        </Modal>
    )
}

export default ModalGallery;