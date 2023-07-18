import React from "react";
import "./Intro_content.css";

const Intro_content = () => {
    return (
        <ul className="Intro_content_box">
            <li className="Intro_content_item">
                <span>IntelliJ IDEA – the Leading Java and Kotlin IDE</span>
            </li>
            <li className="Intro_content_item">
                <span>The IDE that makes development a more productive and enjoyable experience</span>
            </li>
            <li className="Intro_content_item">
                <a href="#" className="Intro_content_login">Login</a>
            </li>
        </ul>
    );
}

export default Intro_content;