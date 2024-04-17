import React from "react";


const GalleryItem = ({setLink, index}) => {
    return(
        <li key={index} onClick={() => setLink(`/img/car${index}.jpg`)}>
            <img src={`/img/car${index}.jpg`}></img>
        </li>
    )
}

export default GalleryItem;