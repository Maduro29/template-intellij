import React from "react";
import Navs_bar from "./Sticky_components/Navs_bar";
import Logo from "./Sticky_components/Logo";

const Sticky = () => {
    return (
        <div className="box">
            <div className="wide">
                <Logo />
                <Navs_bar />
            </div>
        </div>
    );
}

export default Sticky;