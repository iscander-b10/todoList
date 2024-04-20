import React from "react";
import "./style.css"

const Modal = ({active, setActive}) => {
    
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content"  onClick={(e) => e.stopPropagation()}>
                <div>Привет, Ваня!!!</div>
            </div>
        </div>
    )
}

export default Modal;