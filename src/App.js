import React from "react";
import SideBar from "./todo/SideBar/SideBar.jsx";
import Content from "./todo/Content.jsx";
import "./styles.css";

function App() {
    return (
        <div className="wrapper">
            <SideBar />
            <div className="content">
                <Content />
            </div>
        </div>
    );
}

export default App;
