import React, {useState, useEffect} from "react";
import ModalGallery from "../ModalGallery/ModalGallery";
import GalleryItem from "../GalleryItem/GalleryItem";
import Pagination from '@mui/material/Pagination';
import "./style.css"

const contentSize = 10;

const Gallery = () => {
    const [link, setLink] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsImg, setDogs] = useState([]);

    const tetsDogsFetch = async () => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random/80');
        const result = await res.json();

        setDogs(result?.message || []);
    };

    const lastImgIndex = currentPage * contentSize;
    const firstImgIndex = lastImgIndex - contentSize;
    const slicedData = dogsImg.slice(firstImgIndex, lastImgIndex);

    const setPage = (event , pageNumber) => setCurrentPage(pageNumber);

    const pageCount = dogsImg.length / contentSize;
        
    useEffect(() => {
        tetsDogsFetch();
    }, []);

    return(
        <div className="gallery__wrapper">
            <h1 style={{color: "white"}}>{'Галерея'}</h1>
            <ul className="gallery__list">
                {slicedData.map((item, index) => <GalleryItem setLink={setLink} link={item} key={index}/>)}
            </ul>
            <Pagination count={pageCount} onChange={setPage} page={currentPage} color="primary" className={"pagination"} size="large"/>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;