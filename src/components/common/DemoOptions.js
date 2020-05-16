import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/common/Helmet";

import customHooks from "../../hooks/customHooks";

const pages = [
    {
        title: "Home 1",
        image: "/assets/images/demo/1.jpg",
        link: "/home-1",
    },
    {
        title: "Home 2",
        image: "/assets/images/demo/2.jpg",
        link: "/home-2",
    },
    {
        title: "Home 3",
        image: "/assets/images/demo/3.jpg",
        link: "/home-3",
    },
];

const colors = [
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-1",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-2",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-3",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-4",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-5",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-6",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-7",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-8",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-9",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-10",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-11",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
        className: "body-skin-11",
    },
];

function DemoOptions() {
    const [display, setDisplay] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setDisplay(!display);
    };

    const handleClickColor = (e, color) => {
        e.preventDefault();
        // setDisplay(!display);
        console.log("click");
        document.body.className = "";
        document.body.classList.add(color.className);
    };

    return (
        <>
            <Helmet title={`${display}`} />
            <div className={`app-demo-options ${display && "active"}`}>
                <div className="app-demo-options-panel">
                    <div className="app-demo-options-close" onClick={(e) => handleClick(e)}>
                        <i className="ti-close"></i>
                    </div>
                    <span className="app-demo-options-title">Demo Options</span>
                    <div className="app-demo-options-item">
                        <span className="app-demo-options-subtitle">- Color Schemes</span>
                        <ul className="app-demo-options-colors">
                            {colors.map((item, index) => (
                                <li key={index} style={{ backgroundColor: item.primary }} onClick={(e) => handleClickColor(e, item)}></li>
                            ))}
                        </ul>
                    </div>
                    <div className="app-demo-options-item">
                        <span className="app-demo-options-subtitle">- Layout</span>
                        <ul className="app-demo-options-layout">
                            {pages.map((item, index) => (
                                <li key={index} className="text-center">
                                    <Link to={item.link}>
                                        <img src={item.image} alt={item.title} />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="app-demo-options-toggle" onClick={(e) => handleClick(e)}>
                    <i className="ti-settings"></i>
                </div>
            </div>
        </>
    );
}

export default DemoOptions;
