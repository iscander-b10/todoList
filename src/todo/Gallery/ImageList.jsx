import React, { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

const ImageList = ({data, setLink}) => {
    const [preparedData, setPreparedData] = useState(null);
    useEffect(() => {
        const res = data.map((elem, index) => {
            return {
                link: elem,
                id: index
            }
        });
        setPreparedData(res);
    }, [data]);

    if (!preparedData) {
        return null;
    }

    return (
        <ul className="gallery__list">
            {preparedData.map((item) => (
                <GalleryItem setLink={setLink} link={item.link} key={item.id} />
            ))}
        </ul>
    );
};

export default ImageList;
