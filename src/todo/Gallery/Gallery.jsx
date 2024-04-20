import React, {useState} from "react";
import ModalGallery from "../ModalGallery/ModalGallery";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./style.css"
import Pagination from "../Pagination/Pagination";
const contentSize = 5;

const Gallery = () => {
    const [link, setLink] = useState("");
    const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    const [currentPage, setCurrentPage] = useState(1);
    
    const lastImgIndex = currentPage * contentSize;
    const firstImgIndex = lastImgIndex - contentSize;
    const currentImg = data.slice(firstImgIndex, lastImgIndex);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const nextPage = () => setCurrentPage (next => {
        if (next + 1 > data.length / contentSize) {
            return next;
        }
        return (next + 1);
        });
        
    const PrevPage = () => setCurrentPage (prev => {
        if (prev - 1 < 1) {
            return prev;
        }
        return (prev - 1);
    });
        
        

    return(
        <div className="gallery__wrapper">
            <h1>{'Галерея'}</h1>
            <ul className="gallery__list">
                {currentImg.map(item => <GalleryItem setLink={setLink} index={item} key={item}/>)}
            </ul>
            <Pagination contentSize={contentSize} totalImg={data.length} paginate={paginate}/>
            <button className="btn" onClick={PrevPage}>Предыдущая Страница</button>
            <button className="btn" onClick={nextPage}>Следующая Страница</button>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;