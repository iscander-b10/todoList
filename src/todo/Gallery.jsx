import React, {useState} from "react";
import ModalGallery from "./ModalGallery";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
    const [link, setLink] = useState("");

    return(
        <div className="gallery__wrapper">
            <h1>Галерея</h1>
            <ul className="gallery__list">
                {/* <GalleryItem>
                    <img src="../img/car1.jpg"></img>
                </GalleryItem> */}
                <li>
                    {/* <img src="./public/img/car2.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car3.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car4.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car5.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car6.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car7.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car8.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car9.jpg"></img> */}
                </li>
                <li>
                    {/* <img src="./public/img/car10.jpg"></img> */}
                </li>
            </ul>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;