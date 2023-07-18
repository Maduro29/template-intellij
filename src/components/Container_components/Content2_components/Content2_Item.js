import React from "react";
import "./Content2_Item.css";

const $ = document.querySelector.bind(document);

const slide = () => {
    const width = $('.Content2_Item--item').clientWidth;
    const content2_item = $('.Content2_Item');
    for (var i = 0; i < 10000; i++) {
        setTimeout(content2_item.clientLeft += width / 10000, 0.0003);
    }
    console.log($('.Content2_Item--item'), content2_item);
    return width;
}

// slide();

const Content2_Item = () => {
    return (
        <div className="Content2_Item">
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Mary%20Grygleski.jpg"></img>
                <p className="Content2_Item--text">
                    IntelliJ IDEA is undoubtedly the top-choice IDE for software developers. Efficiency and intelligence are built into the design, which enables a very smooth development workflow experience, from design, implementation, building, deploying, testing, and debugging, to refactoring! It is loaded with features and also offers a plethora of plugins that we can integrate into the editor. I switched to using IntelliJ IDEA 5 years ago and have never looked back.It has certainly made my life easier. I am producing more with less effort.
                    <h3 className="Content2_Item--dev">
                        Mary Grygleski
                    </h3>
                    <h4 className="Content2_Item--job">
                        Software Technologist/Engineer
                    </h4>
                </p>
            </div>
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Angie%20Jones.jpg">
                </img>
                <p className="Content2_Item--text">
                    I'm an old school developer, so I didn't move to IntelliJ IDEA when all the cool kids did. However, when I started teaching coding workshops for engineers, the participants asked if they could use it. I realized then that I should try it. Wow, was I missing out! I've been using it extensively ever since and love how efficient it makes me as a developer.
                    <h3 className="Content2_Item--dev">
                        Angie Jones
                    </h3>
                    <h4 className="Content2_Item--job">
                        Senior Developer Advocate & Java Champion
                    </h4>
                </p>

            </div>
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Mercedes%20Wyss.png"></img>
                <p className="Content2_Item--text">
                    What I like the most about IntelliJ IDEA, far beyond all the technology integrations, shortcuts, and that kind of stuff that makes us more productive, are the simple and smart suggestions. They suggest how to name everything, applying naming conventions that give us best practices, or they give us instructions on how to migrate to new Java features. This is one of the characteristics that I highlight in talks with students.
                    <h3 className="Content2_Item--dev">
                        Mercedes Wyss
                    </h3>
                    <h4 className="Content2_Item--job">
                        Groundbreakers Ambassador & CTO
                    </h4>
                </p>

            </div>
            <div className="Content2_Item--item">
                <img className="Content2_img" src="https://resources.jetbrains.com/storage/testimonials/Mohamed%20Taman.jpg"></img>
                <p className="Content2_Item--text">
                    I always feel happy and at home when working on my projects using IntelliJ IDEA Ultimate Edition. First of all, it makes me productive and does a lot in a short time. It is like a Swiss Army knife, providing me with all the features and tools I need to finish the task at hand seamlessly and more effectively. And it comes complete with excellent code tips and amazing testing support.
                    <h3 className="Content2_Item--dev">
                        Mohamed Taman
                    </h3>
                    <h4 className="Content2_Item--job">
                        Owner/CEO & Java Champion
                    </h4>
                </p>
            </div>
        </div>
    );
}

export default Content2_Item;
