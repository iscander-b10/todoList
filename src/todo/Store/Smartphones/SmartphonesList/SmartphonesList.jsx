import React from "react";
import SmartphonesCard from "./SmartphonesCard";
import { storeData } from "../../storeData";
import "./style.css";

const SmartphonesList = () => {
    console.log(storeData);
    return(
        <ul className="smartphonesList">
            {storeData.smartphones.map((elem) => {
                return <SmartphonesCard data = {elem}/>
            })}
            
            {/* <SmartphonesCard
                data = {{
                    name: "Xiaomi Redmi Note 13 Pro 4G 12/512 ГБ",
                    url: "./data/photo.jpg",
                    price: "23910",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "Samsung Galaxy A25 5G 8/256 ГБ",
                    price: "19238",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "realme C53 8/256 ГБ",
                    price: "12464",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "Honor 8X - 6/128 ГБ",
                    price: "6549",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "TECNO Spark 20 Pro+ 8/256GB",
                    price: "16641",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "Nokia 106",
                    price: "1574",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "Apple iPhone 14 128 ГБ",
                    price: "73950",
                }}
            />
            <SmartphonesCard
                data = {{
                    name: "OnePlus Nord CE 3 Lite 5G 8/256Gb",
                    price: "33267",
                }}
            /> */}
            
        </ul> 
    )
}

export default SmartphonesList;

// const SmartphonesCards = {
//     name: [
//         "Xiaomi Redmi Note 13 Pro 4G 12/512 ГБ",
//         "Samsung Galaxy A25 5G 8/256 ГБ",
//         "realme C53 8/256 ГБ",
//         "Honor 8X - 6/128 ГБ",
//         "TECNO Spark 20 Pro+ 8/256GB",
//         "Nokia 106",
//         "Apple iPhone 14 128 ГБ",
//         "OnePlus Nord CE 3 Lite 5G 8/256Gb",
//     ],

//     price: [
//         "23910",
//         "19238",
//         "12464",
//         "6549",
//         "16641",
//         "1574",
//         "73950",
//         "33267",
//     ]
// }