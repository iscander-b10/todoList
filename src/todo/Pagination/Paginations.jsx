import React from "react";
import "./style.css"
import { number } from "prop-types";



const Paginations = ({contentSize, totalImg, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalImg / contentSize); i++) {
        pageNumbers.push(i);
    }

    return(
        <ul className="pagination">
            {
                pageNumbers.map(number => (
                    <li className="pageItem" key={number} onClick={() => paginate(number)}>
                        <a href="#">{number}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Paginations;