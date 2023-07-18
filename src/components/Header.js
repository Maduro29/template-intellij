import React from "react";
import Logo from "./Header_components/Logo";
import Navs_logo from "./Header_components/Navs_logo";
import "./Header.css"

const Header = () => {
    return (
        <div className="header_box">
            <div className="wide">
                <a className="header_link" href="."> <Logo /> </a>
                <Navs_logo />
            </div>
        </div>
    );
}

export default Header;