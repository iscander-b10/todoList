import React from "react";
import{ Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Gallery from "./Gallery";

const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
        </Routes>
    )
}

export default Content;