import React, {useState} from "react";
import ModalGallery from "../ModalGallery/ModalGallery";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./style.css"
import Paginations from "../Pagination/Paginations";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { Stack } from "@mui/material";
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
            <Pagination count={4} color="secondary" className="pagination">
                <Paginations contentSize={contentSize} totalImg={data.length} paginate={paginate}/>
            </Pagination>
            <div className="gallery__btns">
                <Stack>
                    <Button onClick={PrevPage} variant="contained">Предыдущая Страница</Button>
                    <Button onClick={nextPage} variant="contained">Следующая Страница</Button>
                </Stack>
            </div>
            <ModalGallery link={link} setLink={setLink}></ModalGallery>
        </div>
    )
}

export default Gallery;