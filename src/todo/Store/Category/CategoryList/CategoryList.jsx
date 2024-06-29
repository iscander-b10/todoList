import React from "react";
import CategoryCard from "./CategoryCard/CategoryCard";
import { storeData } from "../../storeData";
import "./style.css";

const CategoryList = ({categoryKey}) => {
    return(
        <ul className="categoryList">
            {storeData[categoryKey].products.map((elem, index) => {
            return <CategoryCard data = {elem} key={index}/>
            })}
        </ul> 
    )
}

export default CategoryList;
