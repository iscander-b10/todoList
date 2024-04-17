import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SideBar = () => {
    const sideBarMenu = [
        { title: "Заметки", link: "/" },
        { title: "Галерея", link: "/Gallery" },
    ];

    return (
        <div className="sideBar">
            <Link className="logo-link" to="/">
                <img src="/logo.avif" className="logo"></img>
            </Link>
            <ul className="menu">
                {sideBarMenu.map((item, index) => {
                    return (
                        <Link
                            to={item.link}
                            key={index}
                            className="link"
                        >
                            <li className="sideBarItem">{item.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
