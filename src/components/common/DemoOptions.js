import React, { useState } from "react";
import { Helmet } from "react-helmet";

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
            <Helmet>
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
        <div className={`app-demo-options ${display && "active"}`}>
            <div className="app-demo-options-panel">
                <div className="app-demo-options-close" onClick={(e) => handleClick(e)}>
                    <i className="ti-close"></i>
                </div>
                <span className="app-demo-options-title">Demo Options</span>
                <span className="app-demo-options-subtitle">- Color Schemes</span>
                <ul className="app-demo-options-colors">
                    {colors.map((item, index) => (
                        <li key={index} style={{ backgroundColor: item.primary }} onClick={(e) => handleClickColor(e, item)}></li>
                    ))}
                </ul>
            </div>
            <div className="app-demo-options-toggle" onClick={(e) => handleClick(e)}>
                <i className="ti-settings"></i>
            </div>
        </div>
    );
}

export default DemoOptions;
