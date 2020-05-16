import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

// Scenes
import Demo from "./scenes/Demo";
import About1 from "./scenes/Home/About";
import Intro1 from "./scenes/Home/Intro";
import Intro2 from "./scenes/Home2/Intro";

import Service1 from "./scenes/Home/Service";
import Header1 from "./scenes/Home/Header";

const home1 = [
    {
        path: "/home-1/intro",
        component: <Intro1 />,
    },
    {
        path: "/home-1/about",
        component: <About1 />,
    },
    {
        path: "/home-1/service",
        component: <Service1 />,
    },
];

const Root = () => {
    return (
        <BrowserRouter basename={"/"}>
            {home1.map((item, index) => (
                <Route exact key={index} path={item.path}>
                    {item.component}
                </Route>
            ))}
        </BrowserRouter>
    );
};

function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transition: `all 180ms linear`,
        transform: `scale(${styles.scale}) rotate(${styles.rotate}deg)`,
    };
}

function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    });
}

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2,
        rotate: 0,
    },
    atLeave: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: 0,
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
        rotate: bounce(0),
    },
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
