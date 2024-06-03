import React, {useState, useEffect} from "react";
import ModalGallery from "../ModalGallery/ModalGallery";
import Pagination from '@mui/material/Pagination';
import ImageList from "./ImageList";
import CircularProgress from '@mui/material/CircularProgress';
import "./style.css"

const contentSize = 7;

const Gallery = () => {
    const [link, setLink] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsImg, setDogs] = useState([]);

    const getData = async () => {
        const res = await fetch("https://dog.ceo/api/breeds/image/random/50");
        const result = await res.json();

        if (result.status === "error") {
            console.error(result);
            return;
        }
        
        setDogs(result.message);
    };

    const lastImgIndex = currentPage * contentSize;
    const firstImgIndex = lastImgIndex - contentSize;
    const slicedData = dogsImg.slice(firstImgIndex, lastImgIndex);
    const setPage = (event , pageNumber) => setCurrentPage(pageNumber);
    const pageCount = Math.ceil(dogsImg.length / contentSize);
        
    useEffect(() => {
        getData();
    }, []);

    if (!slicedData.length || !dogsImg.length) {
        return <CircularProgress/>;
    }

    return(
        <div className="gallery__wrapper">
            <div>
                <h1>{'Галерея'}</h1>
                <ImageList data={slicedData} setLink={setLink}/>
            </div>
            <Pagination count={pageCount} onChange={setPage} page={currentPage} color="secondary" className={"pagination"} size="large"/>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;