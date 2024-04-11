import React from "react";

const Gallery = () => {
    return(
        <div className="gallery__wrapper">
            <h1>Галерея</h1>
            <ul className="gallery__list">
                <li><img src="./public/img/car1.jpg"></img></li>
                <li><img src="./public/img/car2.jpg"></img></li>
                <li><img src="./public/img/car3.jpg"></img></li>
                <li><img src="./public/img/car4.jpg"></img></li>
                <li><img src="./public/img/car5.jpg"></img></li>
                <li><img src="./public/img/car6.jpg"></img></li>
                <li><img src="./public/img/car7.jpg"></img></li>
                <li><img src="./public/img/car8.jpg"></img></li>
                <li><img src="./public/img/car9.jpg"></img></li>
                <li><img src="./public/img/car10.jpg"></img></li>
            </ul>
        </div>
    )
}

export default Gallery;