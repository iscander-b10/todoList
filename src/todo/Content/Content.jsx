import React from "react";
import{ Routes, Route } from "react-router-dom";
import Todo from "../Todo/Todo";
import Gallery from "../Gallery/Gallery";
import "./style.css"

const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
    )
}

export default Content;