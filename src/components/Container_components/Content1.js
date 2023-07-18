import React from "react";
import Content1_Item from "./Content1_components/Content1_Item";
import "./Content1.css";

const Content1 = () => {
    return (
        <div className="Content1_box">
            <div className="wide Content1_content">
                <span className="Content1_title">Why Intellij IDEA</span>
                <Content1_Item />
                <img className="Content1_image" src="https://www.jetbrains.com/idea/img/motivation-section/video-preview.png"></img>
            </div>
        </div>
    );
}

export default Content1;