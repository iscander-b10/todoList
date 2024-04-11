import React from "react";

const SideBarItem = (sideBarMenu) => {
    return(
        <li className="sideBarItem">{sideBarMenu.title}</li>
    )
}

export default SideBarItem;