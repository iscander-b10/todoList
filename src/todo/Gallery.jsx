import React, {useState} from "react";
import ModalGallery from "./ModalGallery";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const [link, setLink] = useState("");
    const data = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className="gallery__wrapper">
            <h1>{'Галерея'}</h1>
            <ul className="gallery__list">
                {data.map(item => <GalleryItem link={link} setLink={setLink} index={item}/>)}
            </ul>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;