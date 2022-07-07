import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
function Operate () {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
            <Home />
            </div>
        </div>
    )
}

export default Operate;