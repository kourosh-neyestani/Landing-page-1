import React, { useState } from "react";
import { Link } from "react-router-dom";
import Helmet from "../../components/common/Helmet";

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
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
    },
    {
        base_0: "red",
        base_1: "blue",
        primary: "pink",
        primary_1: "brown",
        secondary: "orange",
        secondary_1: "orangered",
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
        return (
            <Helmet title="Antic">
                <style type="text/css">{`
                    :root {
                        --base-0: ${color.base_0};
                        --base-1: ${color.base_1};
                        --primary: ${color.primary};
                        --primary-1: ${color.primary_1};
                        --secondary: ${color.secondary};
                        --secondary-1: ${color.secondary_1};
                    }
                    body {
                        background: blue !important;
                    }
                `}</style>
            </Helmet>
        );
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
