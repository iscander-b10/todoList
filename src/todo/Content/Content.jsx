import React from "react";
import{ Routes, Route } from "react-router-dom";
import Todo from "../Todo/Todo";
import Gallery from "../Gallery/Gallery";
import "./style.css"
import CalculatorTabs from "../CalculatorTabs/CalculatorTabs";
import Store from "../Store/Store";

const Content = () => {
    return(
        <Routes>
            <Route path="/" element={<Todo/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
            <Route path="/Calculator" element={<CalculatorTabs/>}/>
            <Route path="/Store" element={<Store/>}/>
        </Routes>
    )
}

export default Content;