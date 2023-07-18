import React from "react";
import Content2_Item from "./Content2_components/Content2_Item";
import "./Content2.css";

const Content2 = () => {
    return (
        <div className="Content2_box">
            <div className="wide Content2_content">
                <span className="Content2_title">What Developers Say</span>
                <div className="Content2_text">
                    <Content2_Item />
                </div>
                <span className="Content2_page">
                    <span className="Content2_prev">&lt;</span>
                    <span className="Content2_now">1</span> / 4
                    <span className="Content2_next">&gt;</span>
                </span>
                <a className="Content2_link" href="https://www.jetbrains.com/company/customers/testimonials.html#product=idea">
                    <span className="Content2_link--text">More testimonials</span>
                </a>
            </div>
        </div>
    );
}

export default Content2;