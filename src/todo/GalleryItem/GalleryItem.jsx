import React from "react";
import "./style.css"


const GalleryItem = ({setLink, link, index}) => {
    return(
        <li key={index} onClick={() => setLink(link)}>
            <img src={link} className="img"></img>
        </li>
    )
}

export default GalleryItem;