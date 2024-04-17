import React from "react";


const GalleryItem = ({link, setLink, index}) => {
    return(
        <li onClick={() => setLink("link")}>
            <img src={"/img/car"+index+".jpg"}></img>
        </li>
    )
}

export default GalleryItem;