import React from "react";
import "./style.css"


const GalleryItem = ({setLink, link, index}) => {
    return(
        <li key={index} onClick={() => setLink(link)}>
            <img src={link}></img>
        </li>
    )
}

export default GalleryItem;