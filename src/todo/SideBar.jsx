import React from "react";
import SideBarItem from "./SideBarItem";
import { Link } from "react-router-dom";

 const SideBar = () => {

    const sideBarMenu = [
        {title: "Заметки", link: "/"},
        {title: "Галерея", link: "/Gallery"},
    ]

    return(
        <div className="sideBar">
            <Link to="/">
                <img src="/logo.avif" className="logo"></img>
            </Link>
            <ul>
                { sideBarMenu.map((item, index) => {
                    return(
                        <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
                            <SideBarItem 
                                title={item.title}
                            /> 
                        </Link>
                    )
                }) }
            </ul>
        </div>
    )
}

export default SideBar;