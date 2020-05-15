import React from "react";
import { BrowserRouter, Route, useRouteMatch, Switch, Link } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

// Sections
import Header from "./Header";
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

const routes = [
    {
        link: ``,
        title: "Intro",
        exact: true,
        component: <Intro />,
    },
    {
        link: "about",
        title: "About Me",
        exact: false,
        component: <About />,
    },
    {
        link: "service",
        title: "Service",
        exact: false,
        component: <Service />,
    },
    {
        link: "portfolio",
        title: "Portfolio",
        exact: false,
        component: <Portfolio />,
    },
    {
        link: "blog",
        title: "Blog",
        exact: false,
        component: <Blog />,
    },
    {
        link: "contact",
        title: "Contact",
        exact: false,
        component: <Contact />,
    },
];

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

function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            <Header />
            <Switch atEnter={bounceTransition.atEnter} atLeave={bounceTransition.atLeave} atActive={bounceTransition.atActive} mapStyles={mapStyles} className="route-wrapper">
                {routes.map((item, index) => (
                    <Route path={`${process.env.PUBLIC_URL}${path}/${item.link}`} key={index} exact>
                        {item.component}
                    </Route>
                ))}
            </Switch>
        </div>
    );
}

export default Home;
