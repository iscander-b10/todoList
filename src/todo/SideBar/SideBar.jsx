import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import "./style.css";

const SideBar = () => {
    const sideBarMenu = [
        { title: "Заметки", link: "/" },
        { title: "Галерея", link: "/Gallery" },
        { title: "Калькулятор", link: "/Calculator" },
        { title: "Интернет Магазин", link: "/Store" },
    ];

    return (
        <div className="sideBar">
            <Link to="/">
                <img src="/logo.jpg" className="logo"></img>
            </Link>
            <ul className="menu">
                {sideBarMenu.map((item, index) => {
                    return (
                        <Link
                            to={item.link}
                            key={index}
                            className="link"
                        >
                            <li>
                                <Button style={{color: "white", width: "100%", padding: "2rem 0"}}>{item.title}</Button>
                            </li>
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
