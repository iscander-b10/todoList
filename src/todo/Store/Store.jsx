import React from "react";
import Category from "./Category/Category";
import { storeData } from "./storeData";

const Store = () => {
    return (
        <ul>
            {Object.keys(storeData).map((title) => {
                return <Category title={title} key={title}/>
            })}
        </ul>
        
    )
}

export default Store;