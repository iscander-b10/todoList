import React from "react";

import SideBar from "./todo/SideBar.jsx";
import Content from "./todo/Content.jsx";

function App() {
  return (
    <div className="wrapper">
        <SideBar/>
        <Content/>
    </div>
  );
}

export default App;
