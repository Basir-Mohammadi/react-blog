import React from "react";
import Navbar from "./Navbar";
// import Home from "./Home";
import Cat from "./Home"
function Operate () {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
            {/* <Home /> */}
            <Cat />
            </div>
        </div>
    )
}

export default Operate;