import React from "react";
import Logo from "./Introduction_components/Logo";
import Intro_content from "./Introduction_components/Intro_content";
import "./Introduction.css";

const Introduction = () => {
    return (
        <div className="introduction_box">
            <div className="wide introduction_content">
                <Logo />
                <Intro_content />
            </div>
        </div>
    );
}

export default Introduction;