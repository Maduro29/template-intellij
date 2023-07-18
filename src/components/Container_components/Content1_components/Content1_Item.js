import React from "react";
import "./Content1_Item.css";

const Content1_Item = () => {
    return (
        <ul className="Content1_Item_box">
            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">The Most Advanced Editor</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Write high-quality code faster with coding assistance features that search for possible errors and provide improvement suggestions as you type while seamlessly educating you on community best practices in coding, new language features, and more.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Deep Code Understanding</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">IntelliJ IDEA knows everything about your code and uses this knowledge to offer blazing fast navigation and an intelligent experience by providing relevant suggestions in every context.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Collaborative and Remote</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">Work on a project with your team in real time. Create shared sessions to review code, debug, and more. Move your projects to the remote machine to harness the full power of IntelliJ IDEA on any laptop and boost your productivity.</span>
                </li>
            </ul>

            <ul className="Content1_Item_list">
                <li className="Content1_Item_item">
                    <span className="Content1_Item_title">Out-Of-The-Box Experience</span>
                </li>
                <li className="Content1_Item_item">
                    <span className="Content1_Item_text">"Enjoy an unbeatable toolset right from the first launch. Mission-critical tools and a wide variety of supported languages and frameworks are at your fingertips – no plugin hassle included.</span>
                </li>
            </ul>
        </ul>
    );
}

export default Content1_Item;